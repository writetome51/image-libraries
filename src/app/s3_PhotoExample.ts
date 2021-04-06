/***************************
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html.
Purpose:
s3_PhotoExample.js demonstrates how to manipulate photos in albums stored in an Amazon S3 bucket.
Inputs (replace in code):
- BUCKET_NAME
- REGION
- IDENTITY_POOL_ID
Running the code:
node s3_PhotoExample.js
****************************/

// Load the required clients and packages
const {CognitoIdentityClient} = require("@aws-sdk/client-cognito-identity");
const {fromCognitoIdentityPool} = require("@aws-sdk/credential-provider-cognito-identity");
const {
	S3Client, PutObjectCommand,
	ListObjectsCommand, DeleteObjectCommand
} = require("@aws-sdk/client-s3");


const REGION = "us-east-1"; // e.g., 'us-east-1'; 

// Initialize the Amazon Cognito credentials provider
const s3Client = new S3Client({
	region: REGION,
	credentials: fromCognitoIdentityPool({
		client: new CognitoIdentityClient({region: REGION}),
		identityPoolId: 'us-east-1:b3cf6fc7-081d-4b98-8761-c37d78744742',
	}),
});

const albumBucketName = "image-libraries-app"; // BUCKET_NAME


// A utility function to create HTML
function getHtml(template) {
	return template.join("\n");
}

// Make getHtml function available to the browser
window['getHtml'] = getHtml;



const listAlbums = async () => {
	try {
		const data = await s3Client.send(
			new ListObjectsCommand({Delimiter: "/", Bucket: albumBucketName})
		);

		if (data.CommonPrefixes === undefined) {
			const htmlTemplate = [
				"<p>You don't have any albums. You need to create an album.</p>",
				"<button onclick=\"createAlbum(prompt('Enter album name:'))\">",
				"Create new album",
				"</button>",
			];
			document.getElementById("app").innerHTML = htmlTemplate.join("\n");
		} else {
			var albums = data.CommonPrefixes.map(function (commonPrefix) {
				var prefix = commonPrefix.Prefix;
				var albumName = decodeURIComponent(prefix.replace("/", ""));
				return getHtml([
					"<li>",
					"<span onclick=\"deleteAlbum('" + albumName + "')\">X</span>",
					"<span onclick=\"viewAlbum('" + albumName + "')\">",
					albumName,
					"</span>",
					"</li>",
				]);
			});
			var message = albums.length
				? getHtml([
					"<p>Click an album name to view it.</p>",
					"<p>Click the X to delete the album.</p>",
				])
				: "<p>You do not have any albums. You need to create an album.";
			const htmlTemplate = [
				"<h2>Albums</h2>",
				message,
				"<ul>",
				getHtml(albums),
				"</ul>",
				"<button onclick=\"createAlbum(prompt('Enter Album Name:'))\">",
				"Create new Album",
				"</button>",
			];
			document.getElementById("app").innerHTML = getHtml(htmlTemplate);
		}
	} catch (err) {
		return alert("There was an error listing your albums: " + err.message);
	}
};

// Make listAlbums function available to the browser
window['listAlbums'] = listAlbums;



const createAlbum = async (albumName) => {
	albumName = albumName.trim();
	if (!albumName) {
		return alert("Album names must contain at least one non-space character.");
	}
	if (albumName.indexOf("/") !== -1) {
		return alert("Album names cannot contain slashes.");
	}
	var albumKey = encodeURIComponent(albumName);
	try {
		const key = albumKey + "/";
		const params = {
			Bucket: albumBucketName, 
			Key: key, 
			ACL: 'public-read-write'
		};
		const data = await s3Client.send(new PutObjectCommand(params));
		alert("Successfully created album.");
		viewAlbum(albumName);
	} catch (err) {
		return alert("There was an error creating your album: " + err.message);
	}
};

// Make createAlbum function available to the browser
window['createAlbum'] = createAlbum;



const viewAlbum = async (albumName) => {
	const albumPhotosKey = encodeURIComponent(albumName) + "/";
	try {
		const data = await s3Client.send(
			new ListObjectsCommand({
				Prefix: albumPhotosKey,
				Bucket: albumBucketName,
			})
		);
		if (data.Contents.length === 1) {
			var htmlTemplate = [
				"<p>You don't have any photos in this album. You need to add photos.</p>",
				'<input id="photoupload" type="file" accept="image/*">',
				'<button id="addphoto" onclick="addPhoto(\'' + albumName + "')\">",
				"Add photo",
				"</button>",
				'<button onclick="listAlbums()">',
				"Back to albums",
				"</button>",
			];
			document.getElementById("app").innerHTML = getHtml(htmlTemplate);
		} else {
			console.log(data);
			const href = "https://s3." + REGION + ".amazonaws.com/";
			const bucketUrl = href + albumBucketName + "/";
			const photos = data.Contents.map(function (photo) {
				const photoKey = photo.Key;
				console.log(photo.Key);
				const photoUrl = bucketUrl + encodeURIComponent(photoKey);
				return getHtml([
					"<span>",
					"<div>",
					'<img style="width:128px;height:128px;" src="' + photoUrl + '"/>',
					"</div>",
					"<div>",
					"<span onclick=\"deletePhoto('" +
					albumName +
					"','" +
					photoKey +
					"')\">",
					"X",
					"</span>",
					"<span>",
					photoKey.replace(albumPhotosKey, ""),
					"</span>",
					"</div>",
					"</span>",
				]);
			});
			var message = photos.length
				? "<p>Click the X to delete the photo.</p>"
				: "<p>You don't have any photos in this album. You need to add photos.</p>";
			const htmlTemplate = [
				"<h2>",
				"Album: " + albumName,
				"</h2>",
				message,
				"<div>",
				getHtml(photos),
				"</div>",
				'<input id="photoupload" type="file" accept="image/*">',
				'<button id="addphoto" onclick="addPhoto(\'' + albumName + "')\">",
				"Add photo",
				"</button>",
				'<button onclick="listAlbums()">',
				"Back to albums",
				"</button>",
			];
			document.getElementById("app").innerHTML = getHtml(htmlTemplate);
			document.getElementsByTagName("img")[0].remove();
		}
	} catch (err) {
		return alert("There was an error viewing your album: " + err.message);
	}
};

// Make viewAlbum function available to the browser
window['viewAlbum'] = viewAlbum;



const addPhoto = async (albumName) => {
	// @ts-ignore
	const files = document.getElementById("photoupload").files;
	try {
		const albumPhotosKey = encodeURIComponent(albumName) + "/";
		const data = await s3Client.send(
			new ListObjectsCommand({
				Prefix: albumPhotosKey,
				Bucket: albumBucketName
			})
		);
		const file = files[0];
		const fileName = file.name;
		const photoKey = albumPhotosKey + fileName;
		const uploadParams = {
			Bucket: albumBucketName,
			Key: photoKey,
			Body: file,
			ACL: 'public-read-write'
		};
		try {
			const data = await s3Client.send(new PutObjectCommand(uploadParams));
			alert("Successfully uploaded photo.");
			viewAlbum(albumName);
		} catch (err) {
			return alert("There was an error uploading your photo: " + err.message);
		}
	} catch (err) {
		if (!files.length) {
			return alert("Choose a file to upload first.");
		}
	}
};

// Make addPhoto function available to the browser
window['addPhoto'] = addPhoto;



const deletePhoto = async (albumName, photoKey) => {
	try {
		console.log(photoKey);
		const params = {Key: photoKey, Bucket: albumBucketName};
		const data = await s3Client.send(new DeleteObjectCommand(params));

		viewAlbum(albumName);
	} catch (err) {
		return alert("There was an error deleting your photo: " + err.message);
	}
};

// Make deletePhoto function available to the browser
window['deletePhoto'] = deletePhoto;



const deleteAlbum = async (albumName) => {
	const albumKey = encodeURIComponent(albumName) + "/";
	try {
		const params = {Bucket: albumBucketName, Prefix: albumKey};
		const data = await s3Client.send(new ListObjectsCommand(params));
		const objects = data.Contents.map(function (object) {
			return {Key: object.Key};
		});
		try {
			const params = {
				Bucket: albumBucketName,
				Key: albumKey,
				Delete: {Objects: objects},
				Quiet: true,
			};
			const data = await s3Client.send(new DeleteObjectCommand(params));
			listAlbums();
			return alert("Successfully deleted album.");
		} catch (err) {
			return alert("There was an error deleting your album: " + err.message);
		}
	} catch (err) {
		return alert("There was an error deleting your album1: " + err.message);
	}
};

// Make deleteAlbum function available to the browser
window['deleteAlbum'] = deleteAlbum;

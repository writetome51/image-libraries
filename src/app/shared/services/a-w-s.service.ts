import { AWSData as aws } from '@read-only-data/a-w-s.data';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { DeleteObjectCommand, ListObjectsCommand, PutObjectCommand, S3Client }
	from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { Injectable } from '@angular/core';


/******************************
Connects app with AWS S3 (simple-storage-service).
We're using a single S3 bucket (data container), which contains folders, each of which is
assigned to a user of this app. Each folder contains that user's images.
 *****************************/

@Injectable({providedIn: 'root'})
export class AWSService {

}


// Initialize the Amazon Cognito credentials provider

const s3Client = new S3Client({
	region: aws.region,
	credentials: fromCognitoIdentityPool({
		client: new CognitoIdentityClient({region: aws.region}),
		identityPoolId: aws.identityPoolId
	}),
});


async function getFolderNames(): Promise<string[]> {
	try {
		const data = await s3Client.send(
			new ListObjectsCommand({Delimiter: '/', Bucket: aws.s3Bucket})
		);

		if (noFolders(data)) return [];
		return __getFolderNames(data);
	}
	catch (err) {
		throw new Error('There was an error in getting folder names: ' + err.message);
	}


	function noFolders(data) {
		return (data.CommonPrefixes === undefined);
	}


	function __getFolderNames(data): string[] {
		return data.CommonPrefixes.map(getFolderName);


		function getFolderName(commonPrefix): string {
			let prefix = commonPrefix.Prefix;
			return decodeURIComponent(prefix.replace('/', ''));
		}
	}

}


async function createFolder(folderName): Promise<void> {
	folderName = folderName.trim();
	if (!folderName) throw new Error('Folder names must contain at least one non-space character');
	if (folderName.indexOf('/') !== -1) throw new Error('Folder names cannot contain slashes.');

	let albumKey = encodeURIComponent(folderName);
	try {
		const key = albumKey + '/';
		const params = {
			Bucket: aws.s3Bucket,
			Key: key,
			// Gives user ability to read and delete their own data
			ACL: 'public-read-write'
		};
		const data = await s3Client.send(new PutObjectCommand(params));
		alert('Successfully created album.');
	}
	catch (err) {
		throw new Error('There was an error creating the folder: ' + err.message);
	}
}


async function viewFolder(folderName) {
	const albumPhotosKey = encodeURIComponent(folderName) + '/';
	try {
		const data = await s3Client.send(
			new ListObjectsCommand({
				Prefix: albumPhotosKey,
				Bucket: aws.s3Bucket,
			})
		);
		if (data.Contents.length === 1) {
			var htmlTemplate = [
				'<p>You don\'t have any photos in this album. You need to add photos.</p>',
				'<input id="photoupload" type="file" accept="image/*">',
				'<button id="addphoto" onclick="addImage(\'' + folderName + '\')">',
				'Add photo',
				'</button>',
				'<button onclick="getFolderNames()">',
				'Back to albums',
				'</button>',
			];
		}
		else {
			console.log(data);
			const href = 'https://s3.' + aws.region + '.amazonaws.com/';
			const bucketUrl = href + aws.s3Bucket + '/';
			const photos = data.Contents.map(function(photo) {
				const photoKey = photo.Key;
				console.log(photo.Key);
				const photoUrl = bucketUrl + encodeURIComponent(photoKey);
			});
			var message = photos.length
				? '<p>Click the X to delete the photo.</p>'
				: '<p>You don\'t have any photos in this album. You need to add photos.</p>';
			const htmlTemplate = [
				'<h2>',
				'Album: ' + folderName,
				'</h2>',
				message,
				'<div>',

				'</div>',
				'<input id="photoupload" type="file" accept="image/*">',
				'<button id="addphoto" onclick="addImage(\'' + folderName + '\')">',
				'Add photo',
				'</button>',
				'<button onclick="getFolderNames()">',
				'Back to albums',
				'</button>',
			];
		}
	}
	catch (err) {
		return alert('There was an error viewing your album: ' + err.message);
	}
}


async function addImage(folderName) {
	// @ts-ignore
	const files = document.getElementById('photoupload').files;
	try {
		const albumPhotosKey = encodeURIComponent(folderName) + '/';
		const data = await s3Client.send(
			new ListObjectsCommand({
				Prefix: albumPhotosKey,
				Bucket: aws.s3Bucket
			})
		);
		const file = files[0];
		const fileName = file.name;
		const photoKey = albumPhotosKey + fileName;
		const uploadParams = {
			Bucket: aws.s3Bucket,
			Key: photoKey,
			Body: file,
			// Gives user ability to read and delete their own data
			ACL: 'public-read-write'
		};
		try {
			const data = await s3Client.send(new PutObjectCommand(uploadParams));
			alert('Successfully uploaded photo.');
			viewFolder(folderName);
		}
		catch (err) {
			return alert('There was an error uploading your photo: ' + err.message);
		}
	}
	catch (err) {
		if (!files.length) {
			return alert('Choose a file to upload first.');
		}
	}
}


async function deleteImage(folderName, photoKey) {
	try {
		console.log(photoKey);
		const params = {Key: photoKey, Bucket: aws.s3Bucket};
		const data = await s3Client.send(new DeleteObjectCommand(params));

		viewFolder(folderName);
	}
	catch (err) {
		return alert('There was an error deleting your photo: ' + err.message);
	}
}


async function deleteAlbum(folderName) {
	const albumKey = encodeURIComponent(folderName) + '/';
	try {
		const params = {Bucket: aws.s3Bucket, Prefix: albumKey};
		const data = await s3Client.send(new ListObjectsCommand(params));
		const Objects = data.Contents.map(function(object) {
			return {Key: object.Key};
		});
		try {
			const params = {
				Bucket: aws.s3Bucket,
				Key: albumKey,
				Delete: {Objects},
				Quiet: true,
			};
			const data = await s3Client.send(new DeleteObjectCommand(params));
			getFolderNames();
			return alert('Successfully deleted album.');
		}
		catch (err) {
			return alert('There was an error deleting your album: ' + err.message);
		}
	}
	catch (err) {
		return alert('There was an error deleting your album1: ' + err.message);
	}
}

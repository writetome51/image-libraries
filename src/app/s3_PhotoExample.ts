import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { DeleteObjectCommand, ListObjectsCommand, PutObjectCommand, S3Client }
	from '@aws-sdk/client-s3';
import { AWSData } from '@read-only-data/a-w-s.data';


/******************************
Connects app with AWS S3 (simple-storage-service).
We're using a single S3 bucket (data container), which contains folders, each of which is
assigned to a user of this app. Each folder contains that user's images.
 *****************************/


// Initialize the Amazon Cognito credentials provider

const s3Client = new S3Client({
	region: AWSData.region,
	credentials: fromCognitoIdentityPool({
		client: new CognitoIdentityClient({region: AWSData.region}),
		identityPoolId: AWSData.identityPoolId
	}),
});


async function getFolderNames(): Promise<string[]> {
	try {
		const data = await s3Client.send(
			new ListObjectsCommand({Delimiter: '/', Bucket: AWSData.s3Bucket})
		);

		if (noFolders(data)) return [];
		return __getFolderNames(data);
	}
	catch (err) {
		console.error('There was an error in getting folder names: ' + err.message);
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


const createAlbum = async (albumName) => {
	albumName = albumName.trim();
	if (!albumName) {
		return alert('Album names must contain at least one non-space character.');
	}
	if (albumName.indexOf('/') !== -1) {
		return alert('Album names cannot contain slashes.');
	}
	var albumKey = encodeURIComponent(albumName);
	try {
		const key = albumKey + '/';
		const params = {
			Bucket: AWSData.s3Bucket,
			Key: key,
			ACL: 'public-read-write'
		};
		const data = await s3Client.send(new PutObjectCommand(params));
		alert('Successfully created album.');
		viewAlbum(albumName);
	}
	catch (err) {
		return alert('There was an error creating your album: ' + err.message);
	}
};

// Make createAlbum function available to the browser
window['createAlbum'] = createAlbum;


const viewAlbum = async (albumName) => {
	const albumPhotosKey = encodeURIComponent(albumName) + '/';
	try {
		const data = await s3Client.send(
			new ListObjectsCommand({
				Prefix: albumPhotosKey,
				Bucket: AWSData.s3Bucket,
			})
		);
		if (data.Contents.length === 1) {
			var htmlTemplate = [
				'<p>You don\'t have any photos in this album. You need to add photos.</p>',
				'<input id="photoupload" type="file" accept="image/*">',
				'<button id="addphoto" onclick="addPhoto(\'' + albumName + '\')">',
				'Add photo',
				'</button>',
				'<button onclick="getFolderNames()">',
				'Back to albums',
				'</button>',
			];
		}
		else {
			console.log(data);
			const href = 'https://s3.' + AWSData.region + '.amazonaws.com/';
			const bucketUrl = href + AWSData.s3Bucket + '/';
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
				'Album: ' + albumName,
				'</h2>',
				message,
				'<div>',

				'</div>',
				'<input id="photoupload" type="file" accept="image/*">',
				'<button id="addphoto" onclick="addPhoto(\'' + albumName + '\')">',
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
};


const addPhoto = async (albumName) => {
	// @ts-ignore
	const files = document.getElementById('photoupload').files;
	try {
		const albumPhotosKey = encodeURIComponent(albumName) + '/';
		const data = await s3Client.send(
			new ListObjectsCommand({
				Prefix: albumPhotosKey,
				Bucket: AWSData.s3Bucket
			})
		);
		const file = files[0];
		const fileName = file.name;
		const photoKey = albumPhotosKey + fileName;
		const uploadParams = {
			Bucket: AWSData.s3Bucket,
			Key: photoKey,
			Body: file,
			ACL: 'public-read-write'
		};
		try {
			const data = await s3Client.send(new PutObjectCommand(uploadParams));
			alert('Successfully uploaded photo.');
			viewAlbum(albumName);
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
};


const deletePhoto = async (albumName, photoKey) => {
	try {
		console.log(photoKey);
		const params = {Key: photoKey, Bucket: AWSData.s3Bucket};
		const data = await s3Client.send(new DeleteObjectCommand(params));

		viewAlbum(albumName);
	}
	catch (err) {
		return alert('There was an error deleting your photo: ' + err.message);
	}
};


const deleteAlbum = async (albumName) => {
	const albumKey = encodeURIComponent(albumName) + '/';
	try {
		const params = {Bucket: AWSData.s3Bucket, Prefix: albumKey};
		const data = await s3Client.send(new ListObjectsCommand(params));
		const Objects = data.Contents.map(function(object) {
			return {Key: object.Key};
		});
		try {
			const params = {
				Bucket: AWSData.s3Bucket,
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
};

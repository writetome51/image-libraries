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
export class AWSStorageService {

	private readonly __region = 'us-east-1';
	private readonly __identityPoolId = 'us-east-1:b3cf6fc7-081d-4b98-8761-c37d78744742';
	private readonly __s3Bucket = 'image-libraries-app';

	private readonly __s3Client = new S3Client({
		region: this.__region,
		// Initialize the Amazon Cognito credentials provider
		credentials: fromCognitoIdentityPool({
			client: new CognitoIdentityClient({region: this.__region}),
			identityPoolId: this.__identityPoolId
		}),
	});


	async getFolderNames(): Promise<string[]> {
		try {
			const data = await this.__s3Client.send(
				new ListObjectsCommand({Delimiter: '/', Bucket: this.__s3Bucket})
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


	async createFolder(folderName): Promise<void> {
		folderName = folderName.trim();
		if (!folderName) throw new Error(
			'Folder names must contain at least one non-space character'
		);
		if (folderName.indexOf('/') !== -1) throw new Error('Folder names cannot contain slashes.');

		let folderKey = encodeURIComponent(folderName);
		try {
			const key = folderKey + '/';
			const params = {
				Bucket: this.__s3Bucket,
				Key: key,
				// Gives user ability to read and delete their own data
				ACL: 'public-read-write'
			};
			await this.__s3Client.send(new PutObjectCommand(params));
			alert('Successfully created folder.');
		}
		catch (err) {
			throw new Error('There was an error creating the folder: ' + err.message);
		}
	}


	async viewFolder(folderName) {
		const folderImagesKey = encodeURIComponent(folderName) + '/';
		try {
			const data = await this.__s3Client.send(
				new ListObjectsCommand({
					Prefix: folderImagesKey,
					Bucket: this.__s3Bucket,
				})
			);
			if (noImages(data)) {

			}
			else {
				console.log(data);
				const href = 'https://s3.' + this.__region + '.amazonthis.com/';
				const bucketUrl = href + this.__s3Bucket + '/';
				const images = data.Contents.map(function(image) {
					const imageKey = image.Key;
					console.log(image.Key);
					const imageUrl = bucketUrl + encodeURIComponent(imageKey);
				});
				var message = images.length ?
					'<p>Click the X to delete the image.</p>'
					: '<p>You don\'t have any images in this folder. You need to add images.</p>';
				const htmlTemplate = [
					'<h2>',
					'folder: ' + folderName,
					'</h2>',
					message,
					'<div>',

					'</div>',
					'<input id="imageupload" type="file" accept="image/*">',
					'<button id="addimage" onclick="addImage(\'' + folderName + '\')">',
					'Add image',
					'</button>',
					'<button onclick="getFolderNames()">',
					'Back to folders',
					'</button>',
				];
			}
		}
		catch (err) {
			return alert('There was an error viewing your folder: ' + err.message);
		}


		function noImages(data) {
			return (data.Contents.length === 1);
		}
	}


	async addImage(folderName) {
		// @ts-ignore
		const files = document.getElementById('imageupload').files;
		try {
			const folderImagesKey = encodeURIComponent(folderName) + '/';
			const data = await this.__s3Client.send(
				new ListObjectsCommand({
					Prefix: folderImagesKey,
					Bucket: this.__s3Bucket
				})
			);
			const file = files[0];
			const fileName = file.name;
			const imageKey = folderImagesKey + fileName;
			const uploadParams = {
				Bucket: this.__s3Bucket,
				Key: imageKey,
				Body: file,
				// Gives user ability to read and delete their own data
				ACL: 'public-read-write'
			};
			try {
				await this.__s3Client.send(new PutObjectCommand(uploadParams));
				alert('Successfully uploaded image.');
			}
			catch (err) {
				return alert('There was an error uploading your image: ' + err.message);
			}
		}
		catch (err) {
			if (!files.length) {
				return alert('Choose a file to upload first.');
			}
		}
	}


	async deleteImage(folderName, imageKey) {
		try {
			console.log(imageKey);
			const params = {Key: imageKey, Bucket: this.__s3Bucket};
			await this.__s3Client.send(new DeleteObjectCommand(params));
		}
		catch (err) {
			return alert('There was an error deleting your image: ' + err.message);
		}
	}


	async deleteFolder(folderName) {
		const folderKey = encodeURIComponent(folderName) + '/';
		try {
			const params = {Bucket: this.__s3Bucket, Prefix: folderKey};
			const data = await this.__s3Client.send(new ListObjectsCommand(params));
			const Objects = data.Contents.map(function(object) {
				return {Key: object.Key};
			});
			try {
				const params = {
					Bucket: this.__s3Bucket,
					Key: folderKey,
					Delete: {Objects},
					Quiet: true,
				};
				await this.__s3Client.send(new DeleteObjectCommand(params));
				return alert('Successfully deleted folder');
			}
			catch (err) {
				return alert('There was an error deleting your folder: ' + err.message);
			}
		}
		catch (err) {
			return alert('There was an error deleting your folder: ' + err.message);
		}
	}

}

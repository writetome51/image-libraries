import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { DeleteObjectCommand, ListObjectsCommand, PutObjectCommand, S3Client }
	from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';


/******************************
Connects app with AWS S3 (simple-storage-service).
We're using a single S3 bucket (data container), which contains folders, each of which represents
a user of this app. The folder contain the user's files.
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


	async createFolder(folderName): Promise<void> {
		folderName = folderName.trim();
		if (folderName.indexOf('/') !== -1) throw new Error('Folder names cannot contain slashes.');

		try {
			const params = {
				Bucket: this.__s3Bucket,
				Key: encodeURIComponent(folderName) + '/',
				// Gives user ability to read and delete their own data
				ACL: 'public-read-write'
			};
			await this.__s3Client.send(new PutObjectCommand(params));
		}
		catch (err) {
			throw new Error('There was an error creating the folder: ' + err.message);
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
			}
			catch (err) {
				return alert('There was an error deleting your folder: ' + err.message);
			}
		}
		catch (err) {
			return alert('There was an error deleting your folder: ' + err.message);
		}
	}


	async addFilesToFolderAndReturnURLs(files: File[], folderName: string): Promise<string[]> {
		return getArrFilled(
			files.length,
			async (i) => await this.addFileToFolderAndReturnURL(files[i], folderName)
		);
	}


	async addFileToFolderAndReturnURL(file: File, folderName: string): Promise<string> {

		const folderKey = encodeURIComponent(folderName) + '/';
		const fileKey = folderKey + encodeURIComponent(file.name);
		const uploadParams = {
			Bucket: this.__s3Bucket,
			Key: fileKey,
			Body: file,
			// Gives user ability to read and delete their own data
			ACL: 'public-read-write'
		};
		try {
			await this.__s3Client.send(new PutObjectCommand(uploadParams));
			return this.__getFileURL(fileKey);
		}
		catch (err) {
			alert('There was an error uploading your file: ' + err.message);
		}
	}


	async deleteFile(fileKey: string) {
		try {
			const params = {Key: fileKey, Bucket: this.__s3Bucket};
			await this.__s3Client.send(new DeleteObjectCommand(params));
		}
		catch (err) {
			return alert('There was an error deleting your file: ' + err.message);
		}
	}


	private __getFileURL(fileKey: string): string {
		const href = 'https://s3.' + this.__region + '.amazonaws.com/';
		const bucketUrl = href + this.__s3Bucket + '/';

		// This is the url that must be assigned to 'src' in image's db record:
		return bucketUrl + fileKey;
	}

}

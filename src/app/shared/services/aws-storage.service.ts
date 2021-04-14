import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { DeleteObjectCommand, ListObjectsCommand, PutObjectCommand, S3Client }
	from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { modifyObject } from '@writetome51/modify-object';
import { noValue } from '@writetome51/has-value-no-value';
import { removeByTest } from '@writetome51/array-remove-by-test';


/******************************
Connects app with AWS S3 (simple-storage-service).
We're using a single S3 bucket (data container), which contains folders, each of which represents
a user of this app. The folder contains the user's files.
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


	async createFolder(folderName: string): Promise<{ success: true } | HasError> {
		folderName = folderName.trim();
		if (includesSlash(folderName)) return {
			error: {message: 'Folder names cannot include slashes.'}
		};
		try {
			await this.__insertNewData({ Key: encodeURIComponent(folderName) + '/' });
			return {success: true};
		}
		catch (err) {
			return {
				error: {message: `There was an error creating the user's folder: ${err.message}`}
			};
		}


		function includesSlash(name) { return (name.indexOf('/') !== -1); }
	}


	async deleteFolder(folderName: string) {
		const folderKey = encodeURIComponent(folderName) + '/';
		try {
			const params = {Bucket: this.__s3Bucket, Prefix: folderKey};
			const data = await this.__s3Client.send(new ListObjectsCommand(params));
			const Objects = data.Contents.map(function(object) {
				return {Key: object.Key};
			});
			try {
				await this.__deleteData({
					Key: folderKey,
					Delete: {Objects},
					Quiet: true,
				});
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
		let urls: string[] = getArrFilled(
			files.length,
			async (i) => await this.__addFileToFolderAndReturnURL(files[i], folderName)
		);
		removeByTest((value) => noValue(value), urls);
		return urls;
	}


	async deleteFile(fileKey: string) {
		try { await this.__deleteData({Key: fileKey}); }
		catch (err) { throw new Error('There was an error deleting your file: ' + err.message); }
	}


	private async __addFileToFolderAndReturnURL(file: File, folderName: string): Promise<string> {

		const folderKey = encodeURIComponent(folderName) + '/';
		const fileKey = folderKey + encodeURIComponent(file.name);
		try {
			await this.__insertNewData({Key: fileKey, Body: file});
			return this.__getFileURL(fileKey);
		}
		catch (err) {
			throw new Error(`There was an error adding file "${file.name}":  ` + err.message);
		}
	}


	private async __insertNewData(params) {
		modifyObject(params, this.__getDefaultParams());
		return await this.__s3Client.send(new PutObjectCommand(params));
	}


	private async __deleteData(params) {
		modifyObject(params, this.__getDefaultParams());
		return await this.__s3Client.send(new DeleteObjectCommand(params));
	}


	private __getDefaultParams() {
		return {
			Bucket: this.__s3Bucket,
			// Allows user to read and delete
			ACL: 'public-read-write'
		};
	}


	private __getFileURL(fileKey: string): string {
		const serviceURL = `https://s3.${this.__region}.amazonaws.com/`;
		const bucketURL = serviceURL + this.__s3Bucket + '/';
		return bucketURL + fileKey;
	}

}

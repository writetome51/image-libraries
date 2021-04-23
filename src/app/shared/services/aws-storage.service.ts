import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import {
	DeleteObjectCommand, DeleteObjectRequest, ListObjectsCommand, ListObjectsCommandOutput,
	PutObjectCommand, PutObjectCommandInput, S3Client
} from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { Injectable, Type } from '@angular/core';
import { modifyObject } from '@writetome51/modify-object';


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


	getFileURL(filename: string, folderName: string): string {
		const bucketURL = `https://` + this.__s3Bucket + '.' + `s3.amazonaws.com/`;
		// The fileKey should not be URI-encoded.
		// AWS S3 URI-encodes it for you.  If you encode it first, AWS will double-encode
		// it and will create a different URL than the one this function returns.
		return bucketURL + this.getFileKey(filename, folderName);
	}


	async insertNewData(params: {Key: string, Body?: any}) {
		return await this.__sendCommand(PutObjectCommand, params);
	}


	async deleteData(params: {
		Key: string,
		Delete?: { 
			// call this.getObjectsToDelete() to get array of `Objects`.
			Objects: Array<{ Key: string }> 
		},
		Quiet?: boolean
	}) {
		return await this.__sendCommand(DeleteObjectCommand, params);
	}


	async getObjectsToDelete(folderName: string): Promise< Array<{ Key: string }> > {
		const data: ListObjectsCommandOutput = await this.__getContents(folderName);
		return data.Contents.map((object) => { return {Key: object.Key}; });
	}


	getFileKey(fileName, folderName) {
		return folderName + '/' + fileName;
	}


	private async __sendCommand(
		command: Type<DeleteObjectCommand | PutObjectCommand>,
		params: object
	) {
		let options: DeleteObjectRequest | PutObjectCommandInput = {
			Key: '',
			Bucket: this.__s3Bucket,
			// Allows user to read and delete
			ACL: 'public-read-write'
		};
		modifyObject(options, params);
		return await this.__s3Client.send(new command(options));
	}


	private async __getContents(folderName): Promise<ListObjectsCommandOutput> {
		const folderKey = folderName + '/'
		const params = {Bucket: this.__s3Bucket, Prefix: folderKey};
		return await this.__s3Client.send(new ListObjectsCommand(params));
	}

}

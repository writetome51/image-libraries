import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import {
	_Object, DeleteObjectCommand, ListObjectsCommand, ListObjectsCommandOutput,
	PutObjectCommand, S3Client
} from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { Injectable, Type } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';


/******************************
Connects app with AWS S3 (simple-storage-service).
We're using a single S3 bucket (data container), which contains folders, each of which represents
a user of this app. The folder contains the user's files.
 *****************************/

@Injectable({providedIn: 'root'})
export class AWSS3Service {

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


	getBucketURL(): string {
		return `https://` + this.__s3Bucket + '.' + `s3.amazonaws.com/`;
	}


	async insertData(params: {Key: string, Body?: any}) {
		// Allows user to read and delete
		params['ACL'] = 'public-read-write';
		await this.__sendCommand(PutObjectCommand, params);
	}


	async deleteData(params: {
		Key?: string, // If deleting single object (if folder, it must be empty).
		Delete?: {
			// Required if you're deleting multiple objects. Objects inside must
			// be listed here. Call this.getObjectsInside() to get array of `Objects`.
			Objects: Array<{ Key: string }>
		},
		Quiet?: boolean
	}) {
		return await this.__sendCommand(DeleteObjectCommand, params);
	}


	async getObjectsInside(folderName: string): Promise< Array<{ Key: string }> > {
		const contents: _Object[] = await this.__getContents(folderName);

		return contents.map((object) => { return {Key: object.Key}; });
	}


	private async __sendCommand(
		command: Type<DeleteObjectCommand | PutObjectCommand>,
		params: object
	) {
		params['Bucket'] = this.__s3Bucket;
		return await this.__s3Client.send(new command(params));
	}


	private async __getContents(folderName): Promise<_Object[]> {
		const params = {Bucket: this.__s3Bucket, Prefix: folderName + '/'};
		let output: ListObjectsCommandOutput =
			await this.__s3Client.send(new ListObjectsCommand(params));

		if (noValue(output.Contents)) return [];
		return output.Contents;
	}

}

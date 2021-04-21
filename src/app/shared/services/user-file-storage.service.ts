import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { AWSStorageService } from '@services/aws-storage.service';
import { ListObjectsCommandOutput } from '@aws-sdk/client-s3';


/******************************
Each user gets one folder (named after their username). The folder contains the user's files.
*****************************/

@Injectable({providedIn: 'root'})
export class UserFileStorageService {

	constructor(private __awsStorage: AWSStorageService) {}


	async createFolder(username: string): Promise<{ success: true } | HasError> {
		username = username.trim();
		if (username.includes('/')) return {
			error: {message: 'Folder names cannot include slashes.'}
		};
		try {
			await this.__awsStorage.insertNewData({ Key: encodeURIComponent(username) + '/' });
			return {success: true};
		}
		catch (err) {
			return {
				error: {message: `There was an error creating the user's folder: ${err.message}`}
			};
		}
	}


	async deleteFolder(username: string): Promise<{ success: true } | HasError> {
		const folderKey = encodeURIComponent(username) + '/';
		try {
			var objectsToDelete = await this.__getObjectsToDelete(username);
		}
		catch (err) {
			return {error: {
				message: `There was an error retrieving the contents of your folder: ${err.message}`
			}};
		}
		try {
			await this.__awsStorage.deleteData({
				Key: folderKey, Delete: {Objects: objectsToDelete}, Quiet: true,
			});
			return {success: true};
		}
		catch (err) {
			return {error: {message: `There was an error deleting your folder: ${err.message}`}};
		}
	}


	async addFilesToFolderAndReturnURLs(files: File[], folderName: string): Promise<string[]> {

		let length = files.length, urls = new Array(length);
		for (let i = 0; i < length; ++i) {
			urls[i] = await this.__addFileAndReturnURL(files[i], folderName);
		}
		removeByTest((value) => noValue(value), urls);
		console.log(urls);

		return urls;
	}


	async deleteFile(fileKey: string): Promise<{ success: true } | HasError> {
		try {
			await this.__awsStorage.deleteData({Key: fileKey});
			return {success: true};
		}
		catch (err) {
			return {error: {message: `There was an error deleting your file: ${err.message}`}};
		}
	}


	private async __addFileAndReturnURL(file: File, folderName: string): Promise<string> {

		const folderKey = encodeURIComponent(folderName) + '/';
		const fileKey = folderKey + encodeURIComponent(file.name);
		try {
			await this.__awsStorage.insertNewData({Key: fileKey, Body: file});
			return this.__awsStorage.getFileURL(file.name, folderName);
		}
		catch (err) {
			throw new Error(`There was an error adding file "${file.name}":  ` + err.message);
		}
	}

	private async __getObjectsToDelete(folderName: string): Promise< Array<{Key: string}> > {
		const data: ListObjectsCommandOutput = await this.__awsStorage.getContents(folderName);
		return data.Contents.map((object) => { return {Key: object.Key}; });
	}

}

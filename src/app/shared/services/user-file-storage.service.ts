import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { AWSStorageService } from '@services/aws-storage.service';


/******************************
Each user gets one folder (named after their username). The folder contains the user's files.
*****************************/

@Injectable({providedIn: 'root'})
export class UserFileStorageService {

	constructor(private __awsStorage: AWSStorageService) {}


	async createFolder(userName: string): Promise<{ success: true } | HasError> {
		userName = userName.trim();
		if (userName.includes('/')) return {
			error: {message: 'Folder names cannot include slashes.'}
		};
		try {
			await this.__awsStorage.insertNewData({ Key: encodeURIComponent(userName) + '/' });
			return {success: true};
		}
		catch (err) {
			return {
				error: {message: `There was an error creating the user's folder: ${err.message}`}
			};
		}
	}


	async deleteFolder(userName: string): Promise<{ success: true } | HasError> {
		const folderKey = encodeURIComponent(userName) + '/';
		try {
			var objectsToDelete = await this.__awsStorage.getObjectsToDelete(userName);
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


	async addFilesAndReturnURLs(files: File[], userName: string): Promise<string[]> {

		let length = files.length, urls = new Array(length);
		for (let i = 0; i < length; ++i) {
			urls[i] = await this.__addFileAndReturnURL(files[i], userName);
		}
		removeByTest((value) => noValue(value), urls);
		console.log(urls);

		return urls;
	}


	async deleteFile(fileName: string, folderName: string): Promise<{ success: true } | HasError> {
		try {
			const fileKey = this.__getFileKey(fileName, folderName);
			await this.__awsStorage.deleteData({Key: fileKey});
			return {success: true};
		}
		catch (err) {
			return {error: {message: `There was an error deleting your file: ${err.message}`}};
		}
	}


	private async __addFileAndReturnURL(file: File, folderName: string): Promise<string> {

		const fileKey = this.__getFileKey(file.name, folderName);
		try {
			await this.__awsStorage.insertNewData({Key: fileKey, Body: file});
			return this.__awsStorage.getFileURL(file.name, folderName);
		}
		catch (err) {
			throw new Error(`There was an error adding file "${file.name}":  ` + err.message);
		}
	}


	private __getFileKey(fileName, folderName) {
		const folderKey = encodeURIComponent(folderName) + '/';
		return folderKey + encodeURIComponent(fileName);
	}

}

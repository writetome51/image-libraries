import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { AWSStorageService } from '@services/aws/aws-storage.service';
import { ExecuteLoopRequiringProgressUpdateService as executeLoopRequiringProgressUpdate}
	from '@services/execute-loop-requiring-progress-update.service';
import { UploadingImagesProgressData as uploadingImagesProgress}
	from '@runtime-state-data/uploading-images-progress.data';
import { DeletingAllUserImagesProgressData as deletingImagesProgress }
	from '@runtime-state-data/deleting-all-user-images-progress.data';


// Each user gets one folder (named after their username), containing their files.

@Injectable({providedIn: 'root'})
export class UserFileStorageService {

	constructor(private __awsStorage: AWSStorageService) {}


	// Creates folder for `userName` if it doesn't exist.

	async addFilesAndReturnURLs(files: File[], userName: string): Promise<string[]> {
		let length = files.length, urls = new Array(length);

		await executeLoopRequiringProgressUpdate.go(
			files,
			async (file, i) => urls[i] = await this.__addFileAndReturnURL(file, userName),
			uploadingImagesProgress
		)
		removeByTest((value) => noValue(value), urls);
		return urls;
	}


	async deleteUser(userName: string): Promise<{ success: true } | HasError> {
		try {
			await this.__awsStorage.deleteFolder(userName, deletingImagesProgress);
			return {success: true};
		}
		catch (err) {
			return {error: {message: `There was an error deleting your folder: ${err.message}`}};
		}
	}


	async deleteFile(fileName: string, userName: string): Promise<{ success: true } | HasError> {
		try {
			await this.__awsStorage.deleteFile(fileName, userName);
			return {success: true};
		}
		catch (err) {
			return {error: {message: `There was an error deleting your file: ${err.message}`}};
		}
	}


	private async __addFileAndReturnURL(file: File, userName: string): Promise<string> {
		try {
			await this.__awsStorage.insertFile(file, userName);
			return this.__awsStorage.getFileURL(file.name, userName);
		}
		catch (err) {
			throw new Error(`There was an error adding file "${file.name}":  ` + err.message);
		}
	}

}

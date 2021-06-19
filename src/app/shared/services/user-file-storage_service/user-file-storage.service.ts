import { AWSS3Service } from './aws-s3.service';
import { DeletingFilesProgressData as deletingFilesProgress }
	from '@runtime-state-data/deleting-files-progress.data';
import { ExecuteLoopRequiringProgressUpdateService as executeLoopRequiringProgressUpdate}
	from '@services/user-file-storage_service/execute-loop-requiring-progress-update.service';
import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { UploadingFilesProgressData as uploadingFilesProgress}
	from '@runtime-state-data/uploading-files-progress.data';


// Each user gets one folder (named after their username), containing their files.

@Injectable({providedIn: 'root'})
export class UserFileStorageService {

	constructor(private __awsS3: AWSS3Service) {}


	// Creates folder for `userName` if it doesn't exist.

	async addFilesAndReturnURLs(files: File[], userName: string): Promise<string[]> {
		let length = files.length, urls = new Array(length);

		await executeLoopRequiringProgressUpdate.go(
			files,
			async (file, i) => urls[i] = await this.__addFileAndReturnURL(file, userName),
			uploadingFilesProgress
		)
		removeByTest((value) => noValue(value), urls);
		return urls;
	}


	async deleteAllUserFiles(userName: string): Promise<{ success: true } | HasError> {
		try {
			let objects = await this.__awsS3.getObjectsInside(userName);

			await executeLoopRequiringProgressUpdate.go(
				objects,
				(obj) => this.__awsS3.deleteData({Key: obj.Key}),
				deletingFilesProgress
			);
			return {success: true};
		}
		catch (err) {
			return {error: {message: `There was an error deleting your files: ${err.message}`}};
		}
	}


	async deleteFile(fileName: string, userName: string): Promise<{ success: true } | HasError> {
		try {
			await this.__awsS3.deleteData({Key: this.__awsS3.getFileKey(fileName, userName)});
			return {success: true};
		}
		catch (err) {
			return {error: {message: `There was an error deleting your file: ${err.message}`}};
		}
	}


	private async __addFileAndReturnURL(file: File, userName: string): Promise<string> {
		try {
			await this.insertFile(file, userName);
			return this.__awsS3.getFileURL(file.name, userName);
		}
		catch (err) {
			throw new Error(`There was an error adding file "${file.name}":  ` + err.message);
		}
	}


	// Creates folder for `folderName` if it doesn't exist.

	private async insertFile(file: File, folderName: string) {
		return await this.__awsS3.insertData({
			Key: this.__awsS3.getFileKey(file.name, folderName),
			Body: file
		});
	}

}

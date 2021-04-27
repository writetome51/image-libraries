import { Injectable } from '@angular/core';
import { AWSS3Service } from '@services/aws/aws-s3.service';


@Injectable({providedIn: 'root'})
export class AWSStorageService {

	constructor(private __awsS3: AWSS3Service) {}


	getFileURL(fileName: string, folderName: string): string {
		const bucketURL = this.__awsS3.getBucketURL();
		// The fileKey should not be URI-encoded.
		// AWS S3 URI-encodes it for you.  If you encode it first, AWS will double-encode
		// it and will create a different URL than the one this function returns.
		return bucketURL + this.__getFileKey(fileName, folderName);
	}


	// Creates folder for `folderName` if it doesn't exist.

	async insertFile(file: File, folderName: string) {
		return await this.__awsS3.insertData({
			Key: this.__getFileKey(file.name, folderName),
			Body: file
		});
	}


	async deleteFile(name: string, folderName: string) {
		return await this.__awsS3.deleteData({Key: this.__getFileKey(name, folderName)});
	}


	async deleteFolder(name: string) {
		let objects = await this.__awsS3.getObjectsInside(name);

		for (let i = 0, length = objects.length; i < length; ++i) {
			await this.__awsS3.deleteData({Key: objects[i].Key});
		}
	}


	private __getFileKey(fileName, folderName) {
		return folderName + '/' + fileName;
	}

}

import { AWSStorageService } from '@services/a-w-s-storage.service';
import { EmailInBrowserStorageService } from '@browser-storage/email-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';


/******************************
Each of a user's image files is stored in a cloud folder representing that user. Once an image is
added to the folder, all we need to know about that image is its url.  The url must be assigned
to the 'src' of its ImageDBRecord.
 *****************************/

@Injectable({providedIn: 'root'})
export class StoreImageFilesService implements IDoThis {

	constructor(
		private __awsStorage: AWSStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {}


	async go(images: File[]): Promise<string[] | HasError> {
		let folderName = this.__emailInBrowser.get();
		return this.__awsStorage.addFilesToFolderAndReturnURLs(images, folderName);
	}

}

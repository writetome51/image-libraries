import { EmailInBrowserStorageService } from '@browser-storage/email-in-browser-storage.service';
import { HasError } from '@interfaces/has-error.interface';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { UserFileStorageService } from '@services/user-file-storage.service';
import { TemporaryImageURLsData as temporaryImageURLs }
	from '@runtime-state-data/temporary-image-urls.data';
// import { ImageRecord } from '@interfaces/image-record.interface';


/******************************
Each of a user's image files is stored in a cloud folder representing that user. Once an image is
added to the folder, all we need to know about that image is its url.  The url must be assigned
to the 'src' of its corresponding ImageRecord.
 *****************************/

@Injectable({providedIn: 'root'})
export class StoreImageFilesService implements IDoThis {

	constructor(
		private __userFileStorage: UserFileStorageService,
		private __emailInBrowser: EmailInBrowserStorageService
	) {}


	async go(images: File[]): Promise<string[] | HasError> {
		temporaryImageURLs.data = undefined;
		let userName = this.__emailInBrowser.get();
		return this.__userFileStorage.addFilesAndReturnURLs(images, userName);
	}

}

import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { ImageRecord } from '@interfaces/image-record.interface';


@Injectable({providedIn: 'root'})
export class CurrentlyViewedImageInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<ImageRecord> {

	constructor() { super(sessionStorage, 'current_img'); }

}

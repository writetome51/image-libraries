import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService } from './encrypted-item-in-browser-storage.abstract.service';


@Injectable({providedIn: 'root'})
export class LibraryImageTotalInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<number> {

	constructor() {
		super(localStorage, 'lib-img-total');
	}

}

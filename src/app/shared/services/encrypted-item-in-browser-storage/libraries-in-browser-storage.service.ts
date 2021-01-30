import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService } from './encrypted-item-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class LibrariesInBrowserStorageService extends EncryptedItemInBrowserStorageService<object> {

	constructor() {
		super(localStorage, 'libs');
	}

}

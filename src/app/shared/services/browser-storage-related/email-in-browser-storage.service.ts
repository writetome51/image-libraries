import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';


@Injectable({providedIn: 'root'})
export class EmailInBrowserStorageService extends EncryptedItemInBrowserStorageService<string> {

	constructor() {
		super(localStorage, 'eml');
	}

}

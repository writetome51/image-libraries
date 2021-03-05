import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { DBLibrary } from '@interfaces/db-library.interface';


@Injectable({providedIn: 'root'})
export class LibraryInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<DBLibrary> {

	constructor() {
		super(localStorage, 'current-lib');
	}

}

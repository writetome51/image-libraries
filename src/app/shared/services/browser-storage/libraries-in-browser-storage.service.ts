import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { DBLibrary } from '@interfaces/db-library.interface';


@Injectable({providedIn: 'root'})
export class LibrariesInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<{ [libName: string]: DBLibrary }> {

	constructor() {
		super(localStorage, 'libs');
	}

}

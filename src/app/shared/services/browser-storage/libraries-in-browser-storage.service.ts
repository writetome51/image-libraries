import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { LibraryDBRecord } from '@interfaces/library-db-record.interface';


@Injectable({providedIn: 'root'})
export class LibrariesInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<{ [libName: string]: LibraryDBRecord }> {

	constructor() {
		super(localStorage, 'libs');
	}

}

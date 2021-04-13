import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { LibraryDBRecord } from '@interfaces/library-db-record.interface';


@Injectable({providedIn: 'root'})
export class LoadedLibraryInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<LibraryDBRecord> {

	constructor() {
		super(sessionStorage, 'current-lib');
	}

}

import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { LibraryRecord } from '@interfaces/library-record.interface';


@Injectable({providedIn: 'root'})
export class LibrariesInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<{ [libName: string]: LibraryRecord }> {

	constructor() { super(localStorage, 'libs'); }

}

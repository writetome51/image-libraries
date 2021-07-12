import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from '@browser-storage/encrypted-item-in-browser-storage.abstract.service';


@Injectable({providedIn: 'root'})
export class PageSizeInBrowserStorageService extends EncryptedItemInBrowserStorageService<number> {

	constructor() { super(localStorage, 'page-size'); }

}

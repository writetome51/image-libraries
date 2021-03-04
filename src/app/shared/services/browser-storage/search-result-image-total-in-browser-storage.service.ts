import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';


@Injectable({providedIn: 'root'})
export class SearchResultImageTotalInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<number> {

	constructor() {
		super(localStorage, 'search-img-total');
	}

}

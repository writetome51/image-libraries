import { Injectable } from '@angular/core';
import { ItemInBrowserStorageService }
	from '@services/item-in-browser-storage/item-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class LibrariesInBrowserStorageService extends ItemInBrowserStorageService<object> {

	constructor() {
		super(localStorage, 'libs');
	}

}

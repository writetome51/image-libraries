import { Injectable } from '@angular/core';
import { ItemInBrowserStorageService } from './item-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class UserImagesTotalInBrowserStorageService extends ItemInBrowserStorageService<number> {

	constructor() {
		super(localStorage, 'usr-img-total');
	}

}

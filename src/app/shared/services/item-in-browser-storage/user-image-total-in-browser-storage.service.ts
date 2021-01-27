import { Injectable } from '@angular/core';
import { ItemInBrowserStorageService } from './item-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class UserImageTotalInBrowserStorageService extends ItemInBrowserStorageService<number> {

	constructor() {
		super(localStorage, 'usr-img-total');
	}

}

import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService } from './encrypted-item-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class UserImageTotalInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<number> {

	constructor() {
		super(localStorage, 'usr-img-total');
	}

}

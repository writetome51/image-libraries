import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { DBUser } from '@interfaces/db-user.interface';


@Injectable({providedIn: 'root'})
export class TemporaryUserInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<DBUser> {

	constructor() {
		super(sessionStorage, 'temp-user');
	}

}

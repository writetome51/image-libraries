import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { UserRecord } from '@interfaces/user-record.interface';


@Injectable({providedIn: 'root'})
export class TemporaryUserInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<UserRecord> {

	constructor() {
		super(sessionStorage, 'temp-user');
	}

}

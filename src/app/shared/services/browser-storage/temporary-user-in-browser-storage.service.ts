import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';
import { UserDBRecord } from '@interfaces/user-db-record.interface';


@Injectable({providedIn: 'root'})
export class TemporaryUserInBrowserStorageService
	extends EncryptedItemInBrowserStorageService<UserDBRecord> {

	constructor() {
		super(sessionStorage, 'temp-user');
	}

}

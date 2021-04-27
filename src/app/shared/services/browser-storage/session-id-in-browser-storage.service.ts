import { Injectable } from '@angular/core';
import { EncryptedItemInBrowserStorageService }
	from './encrypted-item-in-browser-storage.abstract.service';


@Injectable({providedIn: 'root'})
export class SessionIDInBrowserStorageService extends EncryptedItemInBrowserStorageService<string> {

	constructor() { super(localStorage, 'lsd'); }

}

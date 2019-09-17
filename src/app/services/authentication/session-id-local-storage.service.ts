import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { SimpleCrypto } from 'simple-crypto-js';
// if above import doesn't work, try:  const SimpleCrypto = require("simple-crypto-js").default;
import { ecky } from '../../../assets/.ecky';


@Injectable({
	providedIn: 'root'
})
export class SessionIDLocalStorageService {

	// The only data kept in local storage will be the user's encrypted session ID.
	// Since it is unique, and also stored in the database, the app uses this to check if he is
	// still logged in.

	private __localCurrentUser = new ObjectInLocalStorage();
	private __cryptographer = new SimpleCrypto(ecky);


	constructor() {
		this.__localCurrentUser.key = 'image-library-current-user';
	}


	set(sessionID): void {
		sessionID = this.__cryptographer.encrypt(sessionID);
		this.__localCurrentUser.set({sessionID});
	}


	get(): string {
		let localCurrentUser = this.__localCurrentUser.get();
		if (hasValue(localCurrentUser)) {
			// @ts-ignore
			return this.__cryptographer.decrypt(localCurrentUser['sessionID']);
		}
		else return '';
	}


	remove() {
		this.__localCurrentUser.remove();
	}


}

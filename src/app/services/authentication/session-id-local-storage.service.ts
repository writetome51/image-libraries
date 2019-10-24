import { ecky } from '../../../assets/.ecky';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { SimpleCrypto } from 'simple-crypto-js';
// if above import doesn't work, try:  const SimpleCrypto = require("simple-crypto-js").default;


@Injectable({
	providedIn: 'root'
})
export class SessionIDLocalStorageService {

	// The only data kept in local storage will be the user's encrypted session ID.
	// Since it is unique, and also stored in the database, the app uses this to check if he is
	// still logged in.

	private __localObject = new ObjectInLocalStorage();
	private __cryptographer = new SimpleCrypto(ecky);


	constructor() {
		this.__localObject.key = 'image-libraries-current-user';
	}


	set(sessionID): void {
		sessionID = this.__cryptographer.encrypt(sessionID);
		this.__localObject.set({sessionID});
	}


	get(): string {
		let localObject = this.__localObject.get();
		if (hasValue(localObject)) {
			// @ts-ignore
			return this.__cryptographer.decrypt(localObject['sessionID']);
		}
		else return '';
	}


	remove(): void {
		this.__localObject.remove();
	}


}

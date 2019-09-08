import { Injectable } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { SimpleCrypto } from 'simple-crypto-js';
// if above import doesn't work, try:  const SimpleCrypto = require("simple-crypto-js").default;
import { ecky } from '../../assets/.ecky';


@Injectable({
	providedIn: 'root'
})
export class SessionIDLocalStorageService {

	// The only data kept in local storage will be the user's encrypted session ID.
	// Since it is unique, and also stored in the database, the app uses this to check if he is
	// still logged in.

	private __localCurrentUser = new ObjectInLocalStorage('image-library-current-user', {});
	private __cryptographer = new SimpleCrypto(ecky);


	set(sessionID): void {
		sessionID = this.__cryptographer.encrypt(sessionID);
		this.__localCurrentUser.set({sessionID});
	}


	get(): string {
		let encryptedSessionID = this.__localCurrentUser.get()['sessionID'];
		// @ts-ignore
		return this.__cryptographer.decrypt(encryptedSessionID);
	}


	remove() {
		this.__localCurrentUser.remove();
	}


}

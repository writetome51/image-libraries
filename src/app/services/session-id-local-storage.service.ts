import { Injectable } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { SimpleCrypto } from 'simple-crypto-js';
import { ecky } from '../../assets/.ecky';


@Injectable({
	providedIn: 'root'
})
export class SessionIDLocalStorageService {

	// The only data kept in local storage will be the user's session ID.
	// Since it is unique, and also stored in the database,
	// the app uses this to check if he is still logged in.
	// So the session ID is used to find the user document, and if loggedIn = true,
	// the user document is returned to the user. But if loggedIn = false, or
	// the most recent login was too many days ago, the user is forced to log in again.
	// If the sessionID is not found in localStorage, it's assumed the user is logged out.

	private __localCurrentUser = new ObjectInLocalStorage('image-library-current-user', {});
	private __cryptographer = new SimpleCrypto(ecky);


	set(sessionID): void {
		// sessionID = SimpleCrypto.encrypt(sessionID);
		this.__localCurrentUser.set({sessionID});
	}


	get(): string {
		// @ts-ignore
		return this.__cryptographer.decrypt(this.__localCurrentUser.get()['sessionID']);
	}


	remove() {
		this.__localCurrentUser.remove();
	}


	/*****************************

	 var SimpleCrypto = require("simple-crypto-js").default;

	 var simpleCrypto = new SimpleCrypto(ecky);

	 var plainText = "Hello World!";
	 var cipherText = simpleCrypto.encrypt(plainText);

	 var decipherText = simpleCrypto.decrypt(cipherText);

	 ****************************/


}

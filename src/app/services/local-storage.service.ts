import { ActiveUserService } from './active-user.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';


@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	// The only data kept in local storage will be the user's session ID.
	// Since it is unique, and also stored in the user document in MongoDB,
	// the app uses this to check if he is still logged in.
	// So the session ID is used to find the user document, and if loggedIn = true,
	// the user document is returned to the user. But if loggedIn = false, or
	// the most recent login was too many days ago, the user is forced to log in again.

	private __localUser = new ObjectInLocalStorage();


	constructor(private __activeUser: ActiveUserService) {
	}


	get loggedIn(): boolean {
		return this.__localUser.get()['loggedIn'];
	}


	private get __userIsStored(): boolean {
		return (hasValue(this.__localUser.get()));
	}


	login(): void {
		if (not(this.__userIsStored)) {
			this.__storeUser();
		}
		this.__localUser.modify({loggedIn: true});
	}


	logout(): void {
		this.__localUser.remove();
	}


	private __storeUser(): void {
		this.__localUser.key = this.__activeUser.email;
		this.__localUser.set({});
	}


}

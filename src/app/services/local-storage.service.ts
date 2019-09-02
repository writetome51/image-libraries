import { ActiveUserService } from './active-user.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';


@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

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

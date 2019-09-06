import { CurrentUserService } from './current-user.service';
import { Injectable } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';


@Injectable({
	providedIn: 'root'
})
export class SessionIDLocalStorageService {

	// The only data kept in local storage will be the user's session ID.
	// Since it is unique, and also stored in the user document in MongoDB,
	// the app uses this to check if he is still logged in.
	// So the session ID is used to find the user document, and if loggedIn = true,
	// the user document is returned to the user. But if loggedIn = false, or
	// the most recent login was too many days ago, the user is forced to log in again.

	private __localCurrentUser = new ObjectInLocalStorage();


	constructor(private __currentUser: CurrentUserService) {
	}


	set(): void {
		this.__localCurrentUser.key = 'image-library-current-user';
		this.__localCurrentUser.set({sss: this.__currentUser.sessionID});
	}


	get(): string {
		return this.__localCurrentUser.get()['sss'];
	}


}

import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { UserStorageService } from './user/user-storage.service';


@Injectable({
	providedIn: 'root'
})
export class ErrorNoDocumentMatchService {

	handler: () => Promise<void>;


	constructor(
		private __alert: AlertService,
		private __userStorage: UserStorageService
	) {
		this.handler = async () => {
			// Use this service's handler when an api request gives you this resulting error message:
			//
			// 'Operation not performed.  No document matched the request criteria'.
			//
			// This means either the user isn't logged in, the user does not exist in db, or the
			// submitted password is wrong.
			// We find out below:

			if ((await this.__userStorage.exists()).success) { // user exists in db.

				if ((await this.__userStorage.get()).error) { // user isn't logged in.
					this.__alert.error = 'You\'re not logged in. Please log in first';
				}
				else { // Else user is logged in, meaning no document matched because
					// the submitted password was wrong.
					this.__alert.error = 'Incorrect password';
				}
			}
			else this.__alert.error = 'User does not exist. Please create an account';
		};
	}
}

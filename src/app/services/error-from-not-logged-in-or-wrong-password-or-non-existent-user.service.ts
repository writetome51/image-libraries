import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { UserRestAPIService } from './user/user-rest-api.service';
import { UserStorageService } from './user/user-storage.service';


@Injectable({
	providedIn: 'root'
})
export class ErrorFromNotLoggedInOrWrongPasswordOrNonExistentUserService {

	handler: (errorMessage) => Promise<any>;


	constructor(
		private __alert: AlertService,
		private __userRestApi: UserRestAPIService,
		private __userStorage: UserStorageService
	) {
		this.handler = async (errMessage) => {
			if (errMessage.includes(
				'Operation not performed.  No document matched the request criteria'
				// This means either user isn't logged in, the user does not exist in db, or the
				// submitted password is wrong.
				// We find out below:
			)) {
				let result = await this.__userStorage.exists();
				if (result.success) { // user exists.
					result = await this.__userStorage.get();

					if (result.error) { // user isn't logged in.
						this.__alert.error = 'You\'re not logged in. Please log in first.';

					} else { // Else user is found, meaning the operation wasn't performed because
						// the submitted password was wrong.
						this.__alert.error = 'Incorrect password';
					}
				} else {
					this.__alert.error = 'User does not exist. Please create an account';
				}

			}
		};
	}
}

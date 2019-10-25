import { Injectable } from '@angular/core';
import { AlertService } from '../alert.service';
import { UserStorageService } from '../user/user-storage.service';
import { incorrectPassword, userDoesntExist } from '../../../string-constants/end-user-error-messages';


@Injectable({
	providedIn: 'root'
})
export class ErrorNoRecordMatchWhileAssumedLoggedInService {

	handler: () => Promise<void>;


	constructor(
		private __alert: AlertService,
		private __userStorage: UserStorageService
	) {
		this.handler = async () => {

			// Use this handler when any of these are possible:
			// the user isn't logged in (but is supposed to be), the user does not exist in db, or the
			// submitted password is wrong.

			if ((await this.__userStorage.exists()).success) { // user exists in db.

				if ((await this.__userStorage.get()).error) { // user isn't logged in.
					this.__alert.error = 'You\'re not logged in. Please log in first';
				}
				else { // Else user is logged in, meaning the submitted password must be wrong.
					this.__alert.error = incorrectPassword;
				}
			}
			else this.__alert.error = userDoesntExist;
		};
	}
}

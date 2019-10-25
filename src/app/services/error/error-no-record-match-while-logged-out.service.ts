import { Injectable } from '@angular/core';
import { AlertService } from '../alert.service';
import { UserStorageService } from '../user/user-storage.service';
import { incorrectPassword, userDoesntExist } from '../../../string-constants/end-user-error-messages';


@Injectable({
	providedIn: 'root'
})
export class ErrorNoRecordMatchWhileLoggedOutService {

	handler: () => Promise<void>;


	constructor(
		private __alert: AlertService,
		private __userStorage: UserStorageService
	) {
		this.handler = async () => {

			// Use this handler when any of these are possible:
			// the user does not exist in db, or the submitted password is wrong.

			if ((await this.__userStorage.exists()).success) {
				this.__alert.error = incorrectPassword;
			}
			else this.__alert.error = userDoesntExist;
		};
	}
}

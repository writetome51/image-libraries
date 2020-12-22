import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { Handler } from '@interfaces/handler';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { incorrectPassword, noAccountWithThatEmail }
	from '@string-constants/form-submission-errors';
import { NotLoggedInErrorHandlerService } from './not-logged-in-error-handler.service';
import { UserStorageService } from '@services/user-storage.service';
import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})
export class NoRecordMatchErrorHandlerService implements Handler {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __notLoggedInErrorHandler: NotLoggedInErrorHandlerService,
		private __userStorage: UserStorageService
	) {
	}


	async handle() {
		let assumedLoggedIn = (!!this.__localSessionID.get());

		if (await this.__userDoesntExist()) alert.error = noAccountWithThatEmail;

		else {
			// @ts-ignore
			if (assumedLoggedIn && (await this.__userStorage.get()).error) {
				// user isn't logged in. If user was logged in, __userStorage.get() would not
				// return error.
				await this.__notLoggedInErrorHandler.handle();
			}
			else { // Else whether or not user is logged in, the submitted password must be wrong.
				alert.error = incorrectPassword;
			}
		}
	}


	private async __userDoesntExist() {
		let result = await this.__userStorage.exists(currentUser.email);
		return not(result.success);
	}

}

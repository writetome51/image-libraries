import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../../../../local-data/local-session-id.service';
import { Handler } from '../../../../../../interfaces/handler';
import { AlertService as alert } from '../../../../alert.service';
import { incorrectPassword, noAccountWithThatEmail }
	from '../../../../../../string-constants/form-submission-errors';
import { NotLoggedInErrorHandlerService } from './not-logged-in-error-handler.service';
import { UserStorageService } from '../../../../user/user-storage.service';
import { CurrentUserData as currentUser}
	from '../../../../../../data-structures/runtime-state-data/static-classes/current-user.data';


@Injectable({providedIn: 'root'})

export class NoRecordMatchErrorHandlerService implements Handler {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __notLoggedInErrorHandler: NotLoggedInErrorHandlerService,
		private __userStorage: UserStorageService
	) {
	}


	async handle() {
		let assumeLoggedIn = (this.__localSessionID.get() ? true: false);

		if (await this.__userExists()) { // user exists in db.

			// @ts-ignore
			if (assumeLoggedIn && (await this.__userStorage.get()).error) {
				// user isn't logged in. If user was logged in, __userStorage.get() would not
				// return error.
				await this.__notLoggedInErrorHandler.handle();
			}
			else { // Else whether or not user is logged in, the submitted password must be wrong.
				alert.error = incorrectPassword;
			}
		}
		else alert.error = noAccountWithThatEmail;
	}


	private async __userExists() {
		let result = await this.__userStorage.exists(currentUser.email);
		return result.success;
	}

}

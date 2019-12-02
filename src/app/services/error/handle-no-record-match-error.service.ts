import { incorrectPassword, accountDoesntExist } from '../../string-constants/form-submission-errors';
import { AlertService as alert } from '../alert.service';
import { UserStorageService } from '../user/user-storage.service';
import { NotLoggedInErrorHandlerService } from './not-logged-in-error-handler.service';
import { IDoThis } from '../../../interfaces/i-do-this';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class HandleNoRecordMatchErrorService implements IDoThis {

	constructor(
		private __userStorage: UserStorageService,
		private __notLoggedInErrorHandler: NotLoggedInErrorHandlerService
	) {
	}


	async go(param: {assumeLoggedIn: boolean}) {
		let assumeLoggedIn = param.assumeLoggedIn;

		if ((await this.__userStorage.exists()).success) { // user exists in db.

			if (assumeLoggedIn && (await this.__userStorage.get()).error) {
				// user isn't logged in. If user was logged in, __userStorage.get() would not return error.
				await this.__notLoggedInErrorHandler.handle();
			}
			else { // Else whether or not user is logged in, the submitted password must be wrong.
				alert.error = incorrectPassword;
			}
		}
		else alert.error = accountDoesntExist;
	}

}

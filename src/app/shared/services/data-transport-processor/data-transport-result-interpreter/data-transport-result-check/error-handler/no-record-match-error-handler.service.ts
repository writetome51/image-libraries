import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Handler } from '@interfaces/handler';
import { incorrectPassword, noAccountWithThatEmail }
	from '@string-constants/form-submission-errors';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { not } from '@writetome51/not';
import { NotLoggedInErrorHandlerService } from './not-logged-in-error-handler.service';
import { UserAccountService } from '@services/user-account.service';


@Injectable({providedIn: 'root'})
export class NoRecordMatchErrorHandlerService implements Handler {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __notLoggedInErrorHandler: NotLoggedInErrorHandlerService,
		private __userAccount: UserAccountService
	) {
	}


	async handle() {
		if (await this.__userDoesntExist()) alert.error = noAccountWithThatEmail;

		else {
			let assumedLoggedIn = (!!this.__localSessionID.get());
			// @ts-ignore
			if (assumedLoggedIn && (await this.__userAccount.get()).error) {
				// user isn't logged in. If user was logged in, __userAccount.get() would not
				// return error.
				await this.__notLoggedInErrorHandler.handle();
			}
			else { // Else whether or not user is logged in, the submitted password must be wrong.
				alert.error = incorrectPassword;
			}
		}
	}


	private async __userDoesntExist() {
		let result = await this.__userAccount.exists();
		return not(result.success);
	}

}

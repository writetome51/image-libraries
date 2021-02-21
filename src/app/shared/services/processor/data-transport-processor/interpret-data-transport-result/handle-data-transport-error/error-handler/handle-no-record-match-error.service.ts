import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { incorrectPassword, noAccountWithThatEmail }
	from '@string-constants/form-submission-errors';
import { Injectable } from '@angular/core';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';
import { not } from '@writetome51/not';
import { HandleNotLoggedInErrorService } from './handle-not-logged-in-error.service';
import { UserAccountService } from '@services/user-account.service';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class HandleNoRecordMatchErrorService implements IDoThis {

	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __handleNotLoggedInError: HandleNotLoggedInErrorService,
		private __userAccount: UserAccountService
	) {
	}


	async go() {
		if (await this.__userDoesntExist()) alert.error = noAccountWithThatEmail;

		else {
			let assumedLoggedIn = (!!this.__sessionIDInBrowser.get());
			// @ts-ignore
			if (assumedLoggedIn && (await this.__userAccount.get()).error) {
				// user isn't logged in. If user was logged in, __userAccount.get() would not
				// return error.
				await this.__handleNotLoggedInError.go();
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
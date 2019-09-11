import { Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';
import { NewUserValidatorService } from './new-user-validator.service';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';
import { ErrorMessageService } from './error-message.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserSaverService {

	constructor(
		private __userStorage: UserStorageService,
		private __newUserValidator: NewUserValidatorService,
		private __success: SuccessOrErrorMessageService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __error: ErrorMessageService
	) {
	}


	save(): void {
		this.__error.message = '';
		this.__success.message = '';

		if (this.__newUserValidator.isValid()) {
			let subscription = this.__userStorage.create().subscribe((result) => {

				if (typeof result === 'string') {
					result = JSON.parse(result);
				}

				if (result.sessionID) {
					this.__sessionIDLocalStorage.set(result.sessionID);
					this.__success.message = 'User created!'
				}
				else {
					this.__error.message = result.error.message;
				}

				subscription.unsubscribe();
			});
		}
	}
}

import { Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';
import { NewUserValidatorService } from './new-user-validator.service';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserSaverService {

	constructor(
		private __userStorage: UserStorageService,
		private __newUserValidator: NewUserValidatorService,
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	save(): void {
		this.__successOrErrorMessage.success = '';

		if (this.__newUserValidator.isValid()) {
			let subscription = this.__userStorage.create().subscribe((result) => {

				if (typeof result === 'string') result = JSON.parse(result);

				if (result.sessionID) {
					this.__sessionIDLocalStorage.set(result.sessionID);
					this.__successOrErrorMessage.success = 'User created!';
				}
				else this.__successOrErrorMessage.error = result.error.message;

				subscription.unsubscribe();
			});
		}
	}
}

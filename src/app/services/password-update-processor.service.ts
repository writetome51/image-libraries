import { Injectable } from '@angular/core';
import { UserStorageService } from './user/user-storage.service';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';
import { PasswordUpdateValidatorService } from './password-update-validator.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateProcessorService {

	constructor(
		private __userStorage: UserStorageService,
		private __updatePasswordResultInterpreter,
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __passwordUpdateValidator: PasswordUpdateValidatorService
	) {
	}


	async process() {
		if (this.__passwordUpdateValidator.isValid()) {
			let result = await this.__userStorage.updatePassword();
			this.__updatePasswordResultInterpreter.interpret(result);
		}
	}


}

import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { PasswordUpdateValidatorService } from './password-update-validator.service';
import { PasswordUpdateResultInterpreterService } from './password-update-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateProcessorService {

	constructor(
		private __userStorage: UserStorageService,
		private __passwordUpdateResultInterpreter: PasswordUpdateResultInterpreterService,
		private __passwordUpdateValidator: PasswordUpdateValidatorService
	) {
	}


	async process() {
		if (this.__passwordUpdateValidator.isValid()) {
			let result = await this.__userStorage.updatePassword();
			this.__passwordUpdateResultInterpreter.interpret(result);
		}
	}


}

import { Injectable } from '@angular/core';
import { PasswordUpdateFormValidatorService } from './password-update-form-validator.service';
import { PasswordUpdateResultInterpreterService } from './password-update-result-interpreter.service';
import { Processor } from '../../../interfaces/processor';
import { UserStorageService } from '../user/user-storage.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateProcessorService implements Processor {

	constructor(
		private __userStorage: UserStorageService,
		private __passwordUpdateResultInterpreter: PasswordUpdateResultInterpreterService,
		private __passwordUpdateFormValidator: PasswordUpdateFormValidatorService
	) {
	}


	async process() {
		if (this.__passwordUpdateFormValidator.isValid()) {
			let result = await this.__userStorage.updatePassword();
			await this.__passwordUpdateResultInterpreter.interpret(result);
		}
	}


}

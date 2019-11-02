import { Injectable } from '@angular/core';
import { PasswordUpdateResultInterpreterService } from './password-update-result-interpreter.service';
import { Processor } from '../../../interfaces/processor';
import { UserStorageService } from '../user/user-storage.service';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateProcessorService implements Processor {

	constructor(
		private __userStorage: UserStorageService,
		private __passwordUpdateResultInterpreter: PasswordUpdateResultInterpreterService,
		private __passwordUpdateFormInputs: ValidatingInputsService
	) {
	}


	async process() {
		if (this.__passwordUpdateFormInputs.areValid()) {
			let result = await this.__userStorage.updatePassword();
			await this.__passwordUpdateResultInterpreter.interpret(result);
		}
	}


}

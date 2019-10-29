import { Injectable } from '@angular/core';
import { NewUserFormValidatorService } from './new-user-form-validator.service';
import { UserCreatorService } from './user-creator/user-creator.service';
import { Processor } from '../../../../interfaces/processor';
import { NewUserResultInterpreterService }
	from './user-creator/new-user-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserProcessorService implements Processor {

	constructor(
		private __userCreator: UserCreatorService,
		private __newUserValidator: NewUserFormValidatorService,
		private __newUserResultInterpreter: NewUserResultInterpreterService
	) {
	}


	async process() {
		if (this.__newUserValidator.isValid()) {
			let result = await this.__userCreator.create();
			this.__newUserResultInterpreter.interpret(result);
		}
	}


}

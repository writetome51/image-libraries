import { NewUserFormInputsService } from '../../new-user-form-inputs.service';
import { Injectable } from '@angular/core';
import { NewUserResultInterpreterService }
	from './new-user-result-interpreter.service';
import { Processor } from '../../../../interfaces/processor';
import { UserCreatorService } from './user-creator.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserProcessorService implements Processor {

	constructor(
		private __userCreator: UserCreatorService,
		private __newUserFormInputs: NewUserFormInputsService,
		private __newUserResultInterpreter: NewUserResultInterpreterService
	) {
	}


	async process() {
		if (this.__newUserFormInputs.areValid()) {
			let result = await this.__userCreator.create();
			this.__newUserResultInterpreter.interpret(result);
		}
	}


}

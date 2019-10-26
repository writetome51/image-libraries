import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { EmailUpdateValidatorService } from './email-update-validator.service';
import { EmailUpdateResultInterpreterService } from './email-update-result-interpreter.service';
import { Processor } from '../../../interfaces/processor';


@Injectable({
	providedIn: 'root'
})
export class EmailUpdateProcessorService implements Processor {

	constructor(
		private __userStorage: UserStorageService,
		private __emailUpdateResultInterpreter: EmailUpdateResultInterpreterService,
		private __emailUpdateValidator: EmailUpdateValidatorService
	) {
	}


	async process() {
		if (this.__emailUpdateValidator.isValid()) {
			let result = await this.__userStorage.updateEmail();
			await this.__emailUpdateResultInterpreter.interpret(result);
		}
	}


}

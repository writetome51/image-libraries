import { Injectable } from '@angular/core';
import { UserDeletorService } from './user-deletor.service';
import { UserDeletionResultInterpreterService } from './user-deletion-result-interpreter.service';
import { Processor } from '../../../../interfaces/processor';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionProcessorService implements Processor {

	constructor(
		private __userDeletor: UserDeletorService,
		private __userDeletionResultInterpreter: UserDeletionResultInterpreterService
	) {
	}


	async process() {
		let result = await this.__userDeletor.delete();
		await this.__userDeletionResultInterpreter.interpret(result);
	}

}

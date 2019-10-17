import { Injectable } from '@angular/core';
import { UserDeletorService } from './user-deletor.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionProcessorService {

	constructor(
		private __userDeletor: UserDeletorService,
		private __userDeletionResultInterpreter

	) {
	}


	async process() {
		let result = await this.__userDeletor.delete();
		this.__userDeletionResultInterpreter.interpret(result);
	}

}

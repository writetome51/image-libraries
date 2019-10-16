import { Injectable } from '@angular/core';
import { DeletedUserResultInterpreterService } from './deleted-user-result-interpreter.service';
import { UserDeletorService } from './user-deletor.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionProcessorService {

	constructor(
		private __deletedUserResultInterpreter: DeletedUserResultInterpreterService,
		private __userDeletor: UserDeletorService
	) {
	}


	process(): void {
		let result = this.__userDeletor.delete();
		this.__deletedUserResultInterpreter.interpret(result);
	}

}

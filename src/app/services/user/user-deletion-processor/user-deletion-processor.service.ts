import { Injectable } from '@angular/core';
import { UserDeletorService } from './user-deletor.service';
import { UserDeletionResultInterpreterService } from './user-deletion-result-interpreter.service';
import { DataOperationProcessorService } from '../../data-operation-processor.service';
import { EmailPasswordInputsService } from '../../email-password-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionProcessorService extends DataOperationProcessorService {

	constructor(
		__emailPasswordInputs: EmailPasswordInputsService,
		__userDeletionResultInterpreter: UserDeletionResultInterpreterService,
		private __userDeletor: UserDeletorService
	) {
		super(__emailPasswordInputs, __userDeletionResultInterpreter);

		this._getResult = async () => await this.__userDeletor.delete();
	}

}

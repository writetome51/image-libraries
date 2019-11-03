import { Injectable } from '@angular/core';
import { UserDeletorService } from './user-deletor.service';
import { UserDeletionResultInterpreterService } from './user-deletion-result-interpreter.service';
import { FormDataProcessorService } from '../../form-data-processor.service';
import { EmailPasswordInputsService } from '../../validating-inputs/email-password-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionProcessorService extends FormDataProcessorService {

	constructor(
		__emailPasswordInputs: EmailPasswordInputsService,
		__userDeletionResultInterpreter: UserDeletionResultInterpreterService,
		private __userDeletor: UserDeletorService
	) {
		super(__emailPasswordInputs, __userDeletionResultInterpreter);

		this._getResult = async () => await this.__userDeletor.delete();
	}

}

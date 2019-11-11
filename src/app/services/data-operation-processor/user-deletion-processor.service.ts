import { Injectable } from '@angular/core';
import { UserDeletorService } from '../user/user-deletor.service';
import { UserDeletionResultInterpreterService }
	from '../result-interpreter/user-deletion-result-interpreter.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { EmailPasswordInputsService } from '../validating-inputs/email-password-inputs/email-password-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionProcessorService extends FormDataOperationProcessorService {

	constructor(
		__emailPasswordInputs: EmailPasswordInputsService,
		__userDeletionResultInterpreter: UserDeletionResultInterpreterService,
		private __userDeletor: UserDeletorService
	) {
		super(__emailPasswordInputs, __userDeletionResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userDeletor.delete();
	}

}

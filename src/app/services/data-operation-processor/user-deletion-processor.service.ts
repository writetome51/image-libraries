import { Injectable } from '@angular/core';
import { UserDeleterService } from '../user/user-deleter.service';
import { UserDeletionResultInterpreterService }
	from '../result-interpreter/user-deletion-result-interpreter.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { LoginEmailPasswordInputsService }
	from '../validating-inputs/login-email-password-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionProcessorService extends FormDataOperationProcessorService {

	constructor(
		private __userDeletor: UserDeleterService,
		__emailPasswordInputs: LoginEmailPasswordInputsService,
		__userDeletionResultInterpreter: UserDeletionResultInterpreterService
	) {
		super(__emailPasswordInputs, __userDeletionResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userDeletor.delete();
	}

}

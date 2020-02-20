import { FormDataTransportProcessorService } from './form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UserDeleterService } from '../user/user-deleter.service';
import { UserDeletionResultInterpreterService }
	from './data-transport-result-interpreter/user-deletion-result-interpreter.service';
import { DeleteUserEmailPasswordInputsService }
	from '../validating-inputs/delete-user-email-password-inputs.service';


@Injectable({providedIn: 'root'})

export class UserDeletionProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userDeleter: UserDeleterService,
		__emailPasswordInputs: DeleteUserEmailPasswordInputsService,
		__userDeletionResultInterpreter: UserDeletionResultInterpreterService
	) {
		super(__emailPasswordInputs, __userDeletionResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userDeleter.delete();
	}

}

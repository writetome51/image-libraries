import { FormDataTransportProcessorService }
	from '../../../../shared/services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UserDeleterService } from './user-deleter.service';
import { DeleteUserResultInterpreterService } from './delete-user-result-interpreter.service';
import { DeleteUserEmailPasswordInputsService } from '../../delete-user-email-password-inputs.service';


@Injectable({providedIn: 'root'})

export class DeleteUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userDeleter: UserDeleterService,
		__emailPasswordInputs: DeleteUserEmailPasswordInputsService,
		__deleteUserResultInterpreter: DeleteUserResultInterpreterService
	) {
		super(__emailPasswordInputs, __deleteUserResultInterpreter);
	}


	protected async _getResult(): Promise<{success: true} | {error: {message: string}}>
	{
		return await this.__userDeleter.delete();
	}

}

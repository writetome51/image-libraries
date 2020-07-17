import { FormDataTransportProcessorService }
	from '../../../services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UserDeleterService } from './user-deleter.service';
import { DeleteUserResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from '../../../services/data-transport-processor/data-transport-result-interpreter/delete-user-result-interpreter.service';
import { DeleteUserEmailPasswordInputsService }
	// tslint:disable-next-line:max-line-length
	from '../../../services/validating-inputs/current-user-inputs/delete-user-email-password-inputs.service';


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

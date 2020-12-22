import { DeleteUserResultInterpreterService } from './delete-user-result-interpreter.service';
import { DeleteUserInputsService } from '../delete-user-inputs.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UserDeleterService } from './user-deleter.service';


@Injectable({providedIn: 'root'})
export class DeleteUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userDeleter: UserDeleterService,
		__deleteUserInputs: DeleteUserInputsService,
		__deleteUserResultInterpreter: DeleteUserResultInterpreterService
	) {
		super(__deleteUserInputs, __deleteUserResultInterpreter);
	}


	protected async _getResult(): Promise<{success: true} | {error: {message: string}}>
	{
		return await this.__userDeleter.delete();
	}

}

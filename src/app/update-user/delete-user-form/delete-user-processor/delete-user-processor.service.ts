import { DeleteUserService } from './delete-user.service';
import { DeleteUserInputsService } from '../delete-user-inputs.service';
import { DeleteUserResultInterpreterService }
	from './delete-user-result-interpreter/delete-user-result-interpreter.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class DeleteUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __deleteUser: DeleteUserService,
		__deleteUserInputs: DeleteUserInputsService,
		__deleteUserResultInterpreter: DeleteUserResultInterpreterService
	) {
		super(__deleteUserInputs, __deleteUserResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__deleteUser.go();
	}

}

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
		__deleteUserInputs: DeleteUserInputsService,
		__deleteUser: DeleteUserService,
		__deleteUserResultInterpreter: DeleteUserResultInterpreterService
	) {
		super(__deleteUserInputs, __deleteUser, __deleteUserResultInterpreter);
	}

}

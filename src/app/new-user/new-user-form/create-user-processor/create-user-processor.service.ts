import { CreateUserService } from './create-user.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs.service';
import { CreateUserResultInterpreterService }
	from './create-user-result-interpreter/create-user-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class CreateUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		__newUserInputs: NewUserInputsService,
		__createUser: CreateUserService,
		__resultInterpreter: CreateUserResultInterpreterService
	) {
		super(__newUserInputs, __createUser, __resultInterpreter);
	}

}

import { CreateUserService } from './create-user.service';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs.service';
import { CreateUserResultInterpreterService }
	from './create-user-result-interpreter/create-user-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class CreateUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __createUser: CreateUserService,
		__newUserInputs: NewUserInputsService,
		__resultInterpreter: CreateUserResultInterpreterService
	) {
		super(__newUserInputs, __resultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__createUser.go();
	}

}

import { DBUser } from '@interfaces/app-user/db-user';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs.service';
import { NewUserResultInterpreterService }
	from './new-user-result-interpreter/new-user-result-interpreter.service';
import { UserCreatorService } from './user-creator.service';


@Injectable({providedIn: 'root'})
export class CreateUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userCreator: UserCreatorService,
		__newUserInputs: NewUserInputsService,
		__newUserResultInterpreter: NewUserResultInterpreterService
	) {
		super(__newUserInputs, __newUserResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__userCreator.create();
	}

}

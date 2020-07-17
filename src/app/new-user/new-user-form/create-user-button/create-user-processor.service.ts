import { FormDataTransportProcessorService }
	from '../../../services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewUserFormInputsService }
	from '../../../services/validating-inputs/current-user-inputs/new-user-form-inputs.service';
import { NewUserResultInterpreterService } from './new-user-result-interpreter.service';
import { UserCreatorService } from './user-creator.service';
import { DBUser } from '../../../../interfaces/db-user';


@Injectable({providedIn: 'root'})

export class CreateUserProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userCreator: UserCreatorService,
		__newUserFormInputs: NewUserFormInputsService,
		__newUserResultInterpreter: NewUserResultInterpreterService
	) {
		super(__newUserFormInputs, __newUserResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__userCreator.create();
	}

}

import { NewUserFormInputsService }
	from '../validating-inputs/new-user-form-inputs/new-user-form-inputs.service';
import { Injectable } from '@angular/core';
import { NewUserResultInterpreterService }
	from '../result-interpreter/new-user-result-interpreter.service';
import { UserCreatorService } from '../user/user-creator.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';


@Injectable({providedIn: 'root'})

export class NewUserProcessorService extends FormDataOperationProcessorService {

	constructor(
		private __userCreator: UserCreatorService,
		__newUserFormInputs: NewUserFormInputsService,
		__newUserResultInterpreter: NewUserResultInterpreterService
	) {
		super(__newUserFormInputs, __newUserResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userCreator.create();
	}

}

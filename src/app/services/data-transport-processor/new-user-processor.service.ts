import { FormDataTransportProcessorService } from './form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { NewUserFormInputsService } from '../validating-inputs/new-user-form-inputs.service';
import { NewUserResultInterpreterService }
	from './data-transport-result-interpreter/new-user-result-interpreter.service';
import { UserCreatorService } from '../user/user-creator.service';


@Injectable({providedIn: 'root'})

export class NewUserProcessorService extends FormDataTransportProcessorService {

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

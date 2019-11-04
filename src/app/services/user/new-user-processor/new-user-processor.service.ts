import { NewUserFormInputsService } from '../../validating-inputs/new-user-form-inputs.service';
import { Injectable } from '@angular/core';
import { NewUserResultInterpreterService }
	from './new-user-result-interpreter.service';
import { UserCreatorService } from './user-creator.service';
import { FormDataOperationProcessorService } from '../../form-data-operation-processor.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserProcessorService extends FormDataOperationProcessorService {

	constructor(
		__newUserFormInputs: NewUserFormInputsService,
		__newUserResultInterpreter: NewUserResultInterpreterService,
		private __userCreator: UserCreatorService
	) {
		super(__newUserFormInputs, __newUserResultInterpreter);

		this._getResult = async () => await this.__userCreator.create();
	}

}

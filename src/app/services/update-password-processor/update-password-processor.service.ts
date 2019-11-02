import { Injectable } from '@angular/core';
import { UpdatePasswordResultInterpreterService } from './update-password-result-interpreter.service';
import { UserStorageService } from '../user/user-storage.service';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';
import { DataOperationProcessorService } from '../data-operation-processor.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordProcessorService extends DataOperationProcessorService {

	constructor(
		__passwordUpdateFormInputs: ValidatingInputsService,
		__passwordUpdateResultInterpreter: UpdatePasswordResultInterpreterService,
		private __userStorage: UserStorageService,
	) {
		super(__passwordUpdateFormInputs, __passwordUpdateResultInterpreter);

		this._getResult = async () => await this.__userStorage.updatePassword();
	}

}

import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { UpdateEmailResultInterpreterService } from './update-email-result-interpreter.service';
import { DataOperationProcessorService } from '../data-operation-processor.service';
import { UpdateEmailFormInputsService } from '../validating-inputs/update-email-form-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class UpdateEmailProcessorService extends DataOperationProcessorService {

	constructor(
		__updateEmailFormInputs: UpdateEmailFormInputsService,
		__updateEmailResultInterpreter: UpdateEmailResultInterpreterService,
		private __userStorage: UserStorageService,
	) {
		super(__updateEmailFormInputs, __updateEmailResultInterpreter);

		this._getResult = async () => await this.__userStorage.updateEmail();
	}

}

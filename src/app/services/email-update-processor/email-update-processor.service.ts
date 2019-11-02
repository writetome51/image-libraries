import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { EmailUpdateResultInterpreterService } from './email-update-result-interpreter.service';
import { DataOperationProcessorService } from '../data-operation-processor.service';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class EmailUpdateProcessorService extends DataOperationProcessorService {

	constructor(
		private __userStorage: UserStorageService,
		private __emailUpdateResultInterpreter: EmailUpdateResultInterpreterService,
		private __emailUpdateFormInputs: ValidatingInputsService
	) {
		super(__emailUpdateFormInputs, __emailUpdateResultInterpreter);

		this._getResult = async () => await this.__userStorage.updateEmail();
	}

}

import { FormDataTransportProcessorService } from './form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { UpdateEmailFormInputsService }
	from '../validating-inputs/update-email-form-inputs.service';
import { UpdateEmailResultInterpreterService }
	from './result-interpreter/update-email-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userStorage: UserStorageService,
		__updateEmailFormInputs: UpdateEmailFormInputsService,
		__updateEmailResultInterpreter: UpdateEmailResultInterpreterService
	) {
		super(__updateEmailFormInputs, __updateEmailResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userStorage.updateEmail();
	}

}

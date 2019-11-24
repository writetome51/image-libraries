import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { UpdatePasswordFormInputsService }
	from '../validating-inputs/update-password-form-inputs.service';
import { UpdateEmailOrPasswordResultInterpreterService }
	from '../result-interpreter/update-email-or-password-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordProcessorService extends FormDataOperationProcessorService {

	constructor(
		private __userStorage: UserStorageService,
		__updatePasswordFormInputs: UpdatePasswordFormInputsService,
		__updateEmailOrPasswordResultInterpreter: UpdateEmailOrPasswordResultInterpreterService
	) {
		super(__updatePasswordFormInputs, __updateEmailOrPasswordResultInterpreter);

		__updateEmailOrPasswordResultInterpreter.messageForResultProcessor = 'Password updated.';
	}


	protected async _getResult(): Promise<any> {
		return await this.__userStorage.updatePassword();
	}

}

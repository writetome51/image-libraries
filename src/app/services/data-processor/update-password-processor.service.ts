import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { FormDataProcessorService } from './form-data-processor.service';
import { UpdatePasswordFormInputsService }
	from '../validating-inputs/update-password-form-inputs.service';
import { UpdatePasswordResultInterpreterService }
	from './result-interpreter/update-password-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordProcessorService extends FormDataProcessorService {

	constructor(
		private __userStorage: UserStorageService,
		__updatePasswordFormInputs: UpdatePasswordFormInputsService,
		__updatePasswordResultInterpreter: UpdatePasswordResultInterpreterService
	) {
		super(__updatePasswordFormInputs, __updatePasswordResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userStorage.updatePassword();
	}

}

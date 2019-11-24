import { Injectable } from '@angular/core';
import { UserStorageService } from '../user/user-storage.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { UpdatePasswordFormInputsService }
	from '../validating-inputs/update-password-form-inputs.service';
import { UpdatePasswordResultInterpreterService }
	from '../result-interpreter/update-password-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordProcessorService extends FormDataOperationProcessorService {

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

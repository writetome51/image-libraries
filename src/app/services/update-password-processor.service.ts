import { Injectable } from '@angular/core';
import { UpdateEmailOrPasswordResultInterpreterService }
	from './update-email-or-password-result-interpreter.service';
import { UserStorageService } from './user/user-storage.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { UpdatePasswordFormInputsService } from './validating-inputs/update-password-form-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordProcessorService extends FormDataOperationProcessorService {

	constructor(
		__updatePasswordFormInputs: UpdatePasswordFormInputsService,
		__updatePasswordResultInterpreter: UpdateEmailOrPasswordResultInterpreterService,
		private __userStorage: UserStorageService,
	) {
		super(__updatePasswordFormInputs, __updatePasswordResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userStorage.updatePassword();
	}

}

import { Injectable } from '@angular/core';
import { UpdatePasswordResultInterpreterService } from './update-password-result-interpreter.service';
import { UserStorageService } from '../user/user-storage.service';
import { ValidatingInputsService } from '../../validating-inputs/validating-inputs.service';
import { FormDataProcessorService } from '../form-data-processor.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordProcessorService extends FormDataProcessorService {

	constructor(
		__updatePasswordFormInputs: ValidatingInputsService,
		__updatePasswordResultInterpreter: UpdatePasswordResultInterpreterService,
		private __userStorage: UserStorageService,
	) {
		super(__updatePasswordFormInputs, __updatePasswordResultInterpreter);

		this._getResult = async () => await this.__userStorage.updatePassword();
	}

}
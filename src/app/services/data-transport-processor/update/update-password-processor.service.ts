import { FormDataTransportProcessorService } from '../form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdatePasswordFormInputsService }
	from '../../validating-inputs/update-password-form-inputs.service';
import { UpdatePasswordResultInterpreterService }
	from '../data-transport-result-interpreter/update-password-result-interpreter.service';
import { UserStorageUpdaterService } from '../../user/user-storage-updater.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userUpdater: UserStorageUpdaterService,
		__updatePasswordFormInputs: UpdatePasswordFormInputsService,
		__updatePasswordResultInterpreter: UpdatePasswordResultInterpreterService
	) {
		super(__updatePasswordFormInputs, __updatePasswordResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userUpdater.updatePassword();
	}

}

import { FormDataTransportProcessorService } from '../../services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdatePasswordFormInputsService }
	from '../../services/validating-inputs/current-user-inputs/update-password-form-inputs.service';
import { UpdatePasswordResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from '../../services/data-transport-processor/data-transport-result-interpreter/update-password-result-interpreter.service';
import { UserStorageUpdaterService } from '../../services/user/user-storage-updater.service';


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

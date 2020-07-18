import { FormDataTransportProcessorService }
	from '../../../services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdatePasswordInputsService }
	from '../update-password-inputs.service';
import { UpdatePasswordResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from './update-password-result-interpreter.service';
import { UserStorageUpdaterService } from '../../user-storage-updater.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userUpdater: UserStorageUpdaterService,
		__updatePasswordFormInputs: UpdatePasswordInputsService,
		__updatePasswordResultInterpreter: UpdatePasswordResultInterpreterService
	) {
		super(__updatePasswordFormInputs, __updatePasswordResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userUpdater.updatePassword();
	}

}

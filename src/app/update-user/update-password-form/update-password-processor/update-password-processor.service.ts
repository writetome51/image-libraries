import { FormDataTransportProcessorService }
	from '@services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdatePasswordInputsService } from '../update-password-inputs/update-password-inputs.service';
import { UpdatePasswordResultInterpreterService } from './update-password-result-interpreter.service';
import { UserUpdaterService } from '../../user-updater.service';
import { DBUser } from '@interfaces/db-user';


@Injectable({providedIn: 'root'})
export class UpdatePasswordProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userUpdater: UserUpdaterService,
		__updatePasswordFormInputs: UpdatePasswordInputsService,
		__updatePasswordResultInterpreter: UpdatePasswordResultInterpreterService
	) {
		super(__updatePasswordFormInputs, __updatePasswordResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__userUpdater.updatePassword();
	}

}

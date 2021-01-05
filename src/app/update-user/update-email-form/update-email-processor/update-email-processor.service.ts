import { FormDataTransportProcessorService }
	from '@services/data-processor/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateEmailInputsService } from '../update-email-inputs/update-email-inputs.service';
import { UpdateEmailResultInterpreterService } from './update-email-result-interpreter.service';
import { UserUpdaterService } from '../../user-updater.service';
import { DBUser } from '@interfaces/db-user';


@Injectable({providedIn: 'root'})
export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userUpdater: UserUpdaterService,
		__updateEmailInputs: UpdateEmailInputsService,
		__updateEmailResultInterpreter: UpdateEmailResultInterpreterService
	) {
		super(__updateEmailInputs, __updateEmailResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__userUpdater.updateEmail();
	}

}

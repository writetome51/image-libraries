import { FormDataTransportProcessorService }
	from '../../services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateEmailFormInputsService }
	from '../../services/validating-inputs/current-user-inputs/update-email-form-inputs.service';
import { UpdateEmailResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from './update-email-result-interpreter.service';
import { UserStorageUpdaterService } from '../user-storage-updater.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userUpdater: UserStorageUpdaterService,
		__updateEmailFormInputs: UpdateEmailFormInputsService,
		__updateEmailResultInterpreter: UpdateEmailResultInterpreterService
	) {
		super(__updateEmailFormInputs, __updateEmailResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userUpdater.updateEmail();
	}

}

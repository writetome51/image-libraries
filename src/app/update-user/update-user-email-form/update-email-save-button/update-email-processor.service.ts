import { FormDataTransportProcessorService }
	from '../../../shared/services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateEmailInputsService } from '../update-email-inputs.service';
import { UpdateEmailResultInterpreterService } from './update-email-result-interpreter.service';
import { UserStorageUpdaterService } from '../../user-storage-updater.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userUpdater: UserStorageUpdaterService,
		__updateEmailInputs: UpdateEmailInputsService,
		__updateEmailResultInterpreter: UpdateEmailResultInterpreterService
	) {
		super(__updateEmailInputs, __updateEmailResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userUpdater.updateEmail();
	}

}

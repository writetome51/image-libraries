import { FormDataTransportProcessorService } from '../form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateEmailFormInputsService }
	from '../../validating-inputs/update-email-form-inputs.service';
import { UpdateEmailResultInterpreterService }
	from '../data-transport-result-interpreter/update-email-result-interpreter.service';
import { UserUpdaterService } from '../../user/user-updater.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __userUpdater: UserUpdaterService,
		__updateEmailFormInputs: UpdateEmailFormInputsService,
		__updateEmailResultInterpreter: UpdateEmailResultInterpreterService
	) {
		super(__updateEmailFormInputs, __updateEmailResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__userUpdater.updateEmail();
	}

}

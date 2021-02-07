import { DBUser } from '@interfaces/app-user/db-user.interface';
import { FormDataTransportProcessorService }
	from '@services/processor/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateEmailInputsService } from '../update-email-inputs/update-email-inputs.service';
import { UpdateEmailResultInterpreterService } from './update-email-result-interpreter.service';
import { UpdateEmailService } from './update-email.service';


@Injectable({providedIn: 'root'})
export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __updateEmail: UpdateEmailService,
		__updateEmailInputs: UpdateEmailInputsService,
		__updateEmailResultInterpreter: UpdateEmailResultInterpreterService
	) {
		super(__updateEmailInputs, __updateEmailResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__updateEmail.go();
	}

}

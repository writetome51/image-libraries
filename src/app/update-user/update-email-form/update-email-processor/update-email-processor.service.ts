import { FormDataTransportProcessorService }
	from '@services/processor/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdateEmailInputsService } from '../update-email-inputs/update-email-inputs.service';
import { UpdateEmailResultInterpreterService } from './update-email-result-interpreter.service';
import { UpdateEmailService } from './update-email.service';


@Injectable({providedIn: 'root'})
export class UpdateEmailProcessorService extends FormDataTransportProcessorService {

	constructor(
		__updateEmailInputs: UpdateEmailInputsService,
		__updateEmail: UpdateEmailService,
		__resultInterpreter: UpdateEmailResultInterpreterService
	) {
		super(__updateEmailInputs, __updateEmail, __resultInterpreter);
	}

}

import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { UpdatePasswordInputsService }
	from '../update-password-inputs/update-password-inputs.service';
import { UpdatePasswordResultInterpreterService }
	from './update-password-result-interpreter.service';
import { UpdatePasswordService } from './update-password.service';


@Injectable({providedIn: 'root'})
export class UpdatePasswordProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInputs: UpdatePasswordInputsService,
		__getResult: UpdatePasswordService,
		__resultInterpreter: UpdatePasswordResultInterpreterService
	) {
		super(__validatingInputs, __getResult, __resultInterpreter);
	}

}

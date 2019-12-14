import { AuthenticatorService } from '../authentication/authenticator.service';
import { FormDataTransportProcessorService } from './form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetSecurityQuestionInputsService }
	from '../validating-inputs/get-security-question-inputs.service';
import { GetSecurityQuestionResultInterpreterService }
	from './data-transport-result-interpreter/get-security-question-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__getSecurityQuestionInputs: GetSecurityQuestionInputsService,
		__getSecurityQuestionResultInterpreter: GetSecurityQuestionResultInterpreterService
	) {
		super(__getSecurityQuestionInputs, __getSecurityQuestionResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__authenticator.getSecurityQuestion();
	}

}

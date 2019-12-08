import { AuthenticatorService } from '../authentication/authenticator.service';
import { FormDataProcessorService } from './form-data-processor.service';
import { Injectable } from '@angular/core';
import { GetSecurityQuestionInputsService }
	from '../validating-inputs/get-security-question-inputs.service';
import { GetSecurityQuestionResultInterpreterService }
	from '../result-interpreter/get-security-question-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionProcessorService extends FormDataProcessorService {

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

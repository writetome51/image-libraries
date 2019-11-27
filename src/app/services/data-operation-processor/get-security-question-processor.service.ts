import { AuthenticatorService } from '../authentication/authenticator.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from '../result-interpreter/login-result-interpreter.service';
import { GetSecurityQuestionInputsService } from '../validating-inputs/get-security-question-inputs.service';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionProcessorService extends FormDataOperationProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__getSecurityQuestionInputs: GetSecurityQuestionInputsService,
		__getSecurityQuestionResultInterpreter: LoginResultInterpreterService
	) {
		super(__getSecurityQuestionInputs, __getSecurityQuestionResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__authenticator.getSecurityQuestion();
	}

}

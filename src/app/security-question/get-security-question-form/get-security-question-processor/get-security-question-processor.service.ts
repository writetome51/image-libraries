import { AuthenticatorService } from '@services/authenticator.service';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { GetSecurityQuestionResultInterpreterService }
	from './get-security-question-result-interpreter/get-security-question-result-interpreter.service';
import { SecurityQuestion } from '@interfaces/security-question.interface';
import { EmailToGetSecurityQuestionInputService }
	from '../email-to-get-security-question-input.service';


@Injectable({providedIn: 'root'})
export class GetSecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__getSecurityQuestionInput: EmailToGetSecurityQuestionInputService,
		__getSecurityQuestionResultInterpreter: GetSecurityQuestionResultInterpreterService
	) {
		super(__getSecurityQuestionInput, __getSecurityQuestionResultInterpreter);
	}


	protected async _getResult(): Promise<SecurityQuestion | {error: {message: string}}> {
		return await this.__authenticator.getSecurityQuestion();
	}

}

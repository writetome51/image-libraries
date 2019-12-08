import { AuthenticatorService } from '../authentication/authenticator.service';
import { FormDataProcessorService } from './form-data-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from './result-interpreter/login-result-interpreter.service';
import { AnswerSecurityQuestionInputsService }
	from '../validating-inputs/answer-security-question-inputs.service';


@Injectable({providedIn: 'root'})

export class LoginBySecurityQuestionProcessorService extends FormDataProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__answerSecurityQuestionInputs: AnswerSecurityQuestionInputsService,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__answerSecurityQuestionInputs, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__authenticator.authenticateBySecurityQuestion();
	}

}

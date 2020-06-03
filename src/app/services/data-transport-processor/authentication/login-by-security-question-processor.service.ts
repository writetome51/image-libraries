import { AuthenticatorService } from '../../authentication/authenticator.service';
import { AnswerSecurityQuestionInputsService }
	from '../../validating-inputs/answer-security-question-inputs.service';
import { FormDataTransportProcessorService } from '../form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService }
	from '../data-transport-result-interpreter/login-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class LoginBySecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__answerSecurityQuestionInputs: AnswerSecurityQuestionInputsService,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__answerSecurityQuestionInputs, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<string> // JSON containing: DBUser | {error: {message:string}}
	{
		return await this.__authenticator.authenticateBySecurityQuestion();
	}

}

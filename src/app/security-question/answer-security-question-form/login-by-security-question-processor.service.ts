import { AuthenticatorService } from '@services/authenticator.service';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService }
	from '@data-transport-process-result-interpreter/login-result-interpreter.service';
import { SecurityAnswerLoginInputService } from './security-answer-login-input.service';


@Injectable({providedIn: 'root'})
export class LoginBySecurityQuestionProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__securityAnswerLoginInput: SecurityAnswerLoginInputService,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__securityAnswerLoginInput, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__authenticator.authenticateBySecurityQuestion();
	}

}

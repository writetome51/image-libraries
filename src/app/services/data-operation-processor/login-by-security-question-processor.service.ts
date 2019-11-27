import { AuthenticatorService } from '../authentication/authenticator.service';
import { FormDataOperationProcessorService } from './form-data-operation-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from '../result-interpreter/login-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class LoginBySecurityQuestionProcessorService extends FormDataOperationProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__emailPasswordInputs,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__emailPasswordInputs, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__authenticator.authenticateBySecurityQuestion();
	}

}

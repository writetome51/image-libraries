import { AuthenticatorService } from './authenticator.service';
import { DataOperationProcessorService } from '../../data-operation-processor.service';
import { EmailPasswordInputsService } from '../../email-password-inputs.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from './login-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class LoginProcessorService extends DataOperationProcessorService {

	constructor(
		__emailPasswordInputs: EmailPasswordInputsService,
		__loginResultInterpreter: LoginResultInterpreterService,
		private __authenticator: AuthenticatorService
	) {
		super(__emailPasswordInputs, __loginResultInterpreter);

		this._getResult = async () => await this.__authenticator.authenticate();
	}

}

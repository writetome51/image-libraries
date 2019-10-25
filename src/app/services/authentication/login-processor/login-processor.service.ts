import { AuthenticatorService } from './authenticator.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from './login-result-interpreter.service';
import { LoginFormValidatorService } from './login-form-validator.service';


@Injectable({
	providedIn: 'root'
})
export class LoginProcessorService {


	constructor(
		private __authenticator: AuthenticatorService,
		private __loginResultInterpreter: LoginResultInterpreterService,
		private __loginFormValidator: LoginFormValidatorService
	) {
	}


	async process() {
		if (this.__loginFormValidator.isValid()) {
			let result = await this.__authenticator.authenticate();
			this.__loginResultInterpreter.interpret(result);
		}
	}


}

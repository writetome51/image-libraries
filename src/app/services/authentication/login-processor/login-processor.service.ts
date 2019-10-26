import { AuthenticatorService } from './authenticator.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from './login-result-interpreter.service';
import { LoginFormValidatorService } from './login-form-validator.service';
import { Processor } from '../../../../interfaces/processor';


@Injectable({
	providedIn: 'root'
})
export class LoginProcessorService implements Processor {


	constructor(
		private __authenticator: AuthenticatorService,
		private __loginResultInterpreter: LoginResultInterpreterService,
		private __loginFormValidator: LoginFormValidatorService
	) {
	}


	async process() {
		if (this.__loginFormValidator.isValid()) {
			let result = await this.__authenticator.authenticate();
			await this.__loginResultInterpreter.interpret(result);
		}
	}


}

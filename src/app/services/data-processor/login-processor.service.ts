import { AuthenticatorService } from '../authentication/authenticator.service';
import { LoginEmailPasswordInputsService }
	from '../validating-inputs/login-email-password-inputs.service';
import { FormDataProcessorService } from './form-data-processor.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from '../result-interpreter/login-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class LoginProcessorService extends FormDataProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__emailPasswordInputs: LoginEmailPasswordInputsService,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__emailPasswordInputs, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__authenticator.authenticate();
	}

}

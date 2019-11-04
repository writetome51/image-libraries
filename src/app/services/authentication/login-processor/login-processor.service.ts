import { AuthenticatorService } from './authenticator.service';
import { FormDataOperationProcessorService } from '../../form-data-operation-processor.service';
import { EmailPasswordInputsService } from '../../validating-inputs/email-password-inputs.service';
import { Injectable } from '@angular/core';
import { LoginResultInterpreterService } from './login-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class LoginProcessorService extends FormDataOperationProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__emailPasswordInputs: EmailPasswordInputsService,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__emailPasswordInputs, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__authenticator.authenticate();
	}

}

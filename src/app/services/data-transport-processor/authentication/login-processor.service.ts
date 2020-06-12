import { AuthenticatorService } from '../../authentication/authenticator.service';
import { FormDataTransportProcessorService } from '../form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginEmailPasswordInputsService }
	from '../../validating-inputs/current-user-inputs/login-email-password-inputs.service';
import { LoginResultInterpreterService }
	from '../data-transport-result-interpreter/login-result-interpreter.service';
import { DBUser } from '../../../../interfaces/db-user';


@Injectable({providedIn: 'root'})

export class LoginProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__emailPasswordInputs: LoginEmailPasswordInputsService,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__emailPasswordInputs, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__authenticator.authenticate();
	}

}
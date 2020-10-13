import { AuthenticatorService } from '@services/authentication/authenticator.service';
import { DBUser } from '@interfaces/db-user';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginFormInputsService } from './login-form-inputs.service';
import { LoginResultInterpreterService }
	from '@data-transport-result-interpreter/login-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class LoginProcessorService extends FormDataTransportProcessorService {

	constructor(
		private __authenticator: AuthenticatorService,
		__loginFormInputs: LoginFormInputsService,
		__loginResultInterpreter: LoginResultInterpreterService
	) {
		super(__loginFormInputs, __loginResultInterpreter);
	}


	protected async _getResult(): Promise<DBUser | { error: { message: string } }> {
		return await this.__authenticator.authenticate();
	}

}
import { AuthenticatorService } from '../../shared/services/authentication/authenticator.service';
import { DBUser } from '../../shared/interfaces/db-user';
import { FormDataTransportProcessorService }
	from '../../shared/services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginFormInputsService }
	from './login-form-inputs.service';
import { LoginResultInterpreterService } // tslint:disable-next-line:max-line-length
	from '../../shared/services/data-transport-processor/data-transport-result-interpreter/login-result-interpreter.service';


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

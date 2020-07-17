import { AuthenticatorService } from '../../services/authentication/authenticator.service';
import { FormDataTransportProcessorService } from '../../services/data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginEmailPasswordInputsService }
	from '../../services/validating-inputs/current-user-inputs/login-email-password-inputs.service';
import { LoginResultInterpreterService }
	from '../../services/data-transport-processor/data-transport-result-interpreter/login-result-interpreter.service';
import { DBUser } from '../../../interfaces/db-user';


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

import { AuthenticatorService } from '@services/authenticator.service';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { Injectable } from '@angular/core';
import { LoginFormInputsService } from './login-form-inputs.service';
import { LoginResultInterpreterService }
	from '@data-transport-process-result-interpreter/login-result-interpreter.service';


@Injectable()
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

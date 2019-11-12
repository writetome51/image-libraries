import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService } from '../result-interpreter/logout-result-interpreter.service';
import { DeAuthenticatorService } from '../authentication/de-authenticator.service';
import { DataOperationProcessorService } from './data-operation-processor.service';


@Injectable({providedIn: 'root'})

export class LogoutProcessorService extends DataOperationProcessorService {

	constructor(
		__logoutResultInterpreter: LogoutResultInterpreterService,
		private __deAuthenticator: DeAuthenticatorService
	) {
		super(__logoutResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__deAuthenticator.deAuthenticate();
	}

}

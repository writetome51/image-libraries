import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService } from '../result-interpreter/logout-result-interpreter.service';
import { DeAuthenticatorService } from '../authentication/de-authenticator.service';
import { DataOperationProcessorService } from './data-operation-processor.service';


@Injectable({providedIn: 'root'})

export class LogoutProcessorService extends DataOperationProcessorService {

	constructor(
		private __deAuthenticator: DeAuthenticatorService,
		__logoutResultInterpreter: LogoutResultInterpreterService
	) {
		super(__logoutResultInterpreter);
	}


	protected async _getResult(): Promise<any> {
		return await this.__deAuthenticator.deAuthenticate();
	}

}

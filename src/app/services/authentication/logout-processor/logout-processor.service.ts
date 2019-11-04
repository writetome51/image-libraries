import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService } from './logout-result-interpreter.service';
import { DeAuthenticatorService } from './de-authenticator.service';
import { DataOperationProcessorService } from '../../data-operation-processor.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutProcessorService extends DataOperationProcessorService {

	constructor(
		__logoutResultInterpreter: LogoutResultInterpreterService,
		private __deAuthenticator: DeAuthenticatorService
	) {
		super(__logoutResultInterpreter);

		this._getResult = async () => await this.__deAuthenticator.deAuthenticate();
	}

}

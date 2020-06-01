import { DeAuthenticatorService } from '../../authentication/de-authenticator.service';
import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService }
	from '../data-transport-result-interpreter/logout-result-interpreter.service';
import { DataTransportProcessorService } from '../data-transport-processor.service';


@Injectable({providedIn: 'root'})

export class LogoutProcessorService extends DataTransportProcessorService {

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

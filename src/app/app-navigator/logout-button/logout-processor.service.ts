import { DeAuthenticatorService } from './de-authenticator.service';
import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from '../../services/data-transport-processor/data-transport-result-interpreter/logout-result-interpreter.service';
import { DataTransportProcessorService }
	from '../../services/data-transport-processor/data-transport-processor.service';


@Injectable({providedIn: 'root'})

export class LogoutProcessorService extends DataTransportProcessorService {

	constructor(
		private __deAuthenticator: DeAuthenticatorService,
		__logoutResultInterpreter: LogoutResultInterpreterService
	) {
		super(__logoutResultInterpreter);
	}


	protected async _getResult(): Promise<{success: true} | {error: {message: string}}>
	{
		return await this.__deAuthenticator.deAuthenticate();
	}

}

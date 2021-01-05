import { DataTransportProcessorService }
	from '@services/data-processor/data-transport-processor/data-transport-processor.service';
import { DeAuthenticatorService } from './de-authenticator.service';
import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService } from './logout-result-interpreter.service';


@Injectable({providedIn: 'root'})
export class LogoutProcessorService extends DataTransportProcessorService {

	constructor(
		private __deAuthenticator: DeAuthenticatorService,
		__resultInterpreter: LogoutResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__deAuthenticator.deAuthenticate();
	}

}

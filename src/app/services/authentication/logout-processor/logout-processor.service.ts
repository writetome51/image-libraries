import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService } from './logout-result-interpreter.service';
import { DeAuthenticatorService } from './de-authenticator.service';
import { Processor } from '../../../../interfaces/processor';


@Injectable({
	providedIn: 'root'
})
export class LogoutProcessorService implements Processor {


	constructor(
		private __logoutResultInterpreter: LogoutResultInterpreterService,
		private __deAuthenticator: DeAuthenticatorService
	) {
	}


	async process() {
		let result = await this.__deAuthenticator.deAuthenticate();
		this.__logoutResultInterpreter.interpret(result);
	}


}

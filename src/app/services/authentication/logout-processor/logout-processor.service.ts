import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService } from './logout-result-interpreter.service';
import { DeAuthenticatorService } from './de-authenticator.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutProcessorService {


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

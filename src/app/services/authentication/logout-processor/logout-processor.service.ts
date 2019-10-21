import { AuthenticationRestAPIService } from '../authentication-rest-api.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../session-id-local-storage.service';
import { LogoutResultInterpreterService } from './logout-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutProcessorService {


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __logoutResultInterpreter: LogoutResultInterpreterService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	async process() {
		let result = await getSubscriptionData(
			this.__authenticationRestApi.logout({sessionID: this.__sessionIDLocalStorage.get()})
		);
		this.__logoutResultInterpreter.interpret(result);
	}


}

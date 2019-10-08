import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';
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


	process(): void {
		let subscription = this.__authenticationRestApi.logout(
			{sessionID: this.__sessionIDLocalStorage.get()}
		).subscribe((result) => {

			this.__logoutResultInterpreter.interpret(result);
			subscription.unsubscribe();
		});

	}


}

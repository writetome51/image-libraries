import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';
import { UserLogoutOrDeletionResultInterpreterService }
	from '../user/user-logout-or-deletion-result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutProcessorService {


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __userLogoutOrDeletionResultInterpreter: UserLogoutOrDeletionResultInterpreterService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	process(): void {
		let subscription = this.__authenticationRestApi.logout(
			{sessionID: this.__sessionIDLocalStorage.get()}
		).subscribe((result) => {

			this.__userLogoutOrDeletionResultInterpreter.interpret(result);
			subscription.unsubscribe();
		});

	}


}

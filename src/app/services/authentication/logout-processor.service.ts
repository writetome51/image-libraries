import { LoginResultInterpreterService } from './login-result-interpreter.service';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutProcessorService {


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __authenticationResult: LoginResultInterpreterService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	process(): void {
		let subscription = this.__authenticationRestApi.logout(
			{sessionID: this.__sessionIDLocalStorage.get()}
		).subscribe((data) => {

			this.__authenticationResult.interpretLogout(data);
			subscription.unsubscribe();
		});

	}


}

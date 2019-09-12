import { AuthenticationResultService } from './authentication-result.service';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class LogoutProcessorService {


	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __authenticationResult: AuthenticationResultService
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

import { Injectable } from '@angular/core';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { AuthenticationRestAPIService } from '../authentication-rest-api.service';
import { SessionIDLocalStorageService } from '../session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class DeAuthenticatorService {

	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	async deAuthenticate() {
		return await getSubscriptionData(
			this.__authenticationRestApi.logout({sessionID: this.__sessionIDLocalStorage.get()})
		);
	}
}

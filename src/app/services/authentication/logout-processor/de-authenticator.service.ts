import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from '../authentication-rest-api.service';
import { SessionIDLocalStorageService } from '../session-id-local-storage.service';
import { ReturnObjectFromSubscriptionService } from '../../return-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class DeAuthenticatorService extends ReturnObjectFromSubscriptionService {

	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
		super();
	}


	async deAuthenticate() {
		return await this._getObjectFromSubscriptionTo(
			this.__authenticationRestApi.logout({sessionID: this.__sessionIDLocalStorage.get()})
		);
	}
}

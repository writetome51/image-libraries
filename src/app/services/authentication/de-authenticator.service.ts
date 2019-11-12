import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { LocalSessionIDService } from './local-session-id.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../get-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class DeAuthenticatorService {

	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async deAuthenticate() {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.logout({sessionID: this.__localSessionID.get()})
		);
	}
}

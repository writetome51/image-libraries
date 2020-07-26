import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService }
	from '@services/authentication/authentication-rest-api.service';
import { LocalSessionIDService } from '@local-data/local-session-id.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../../../shared/services/get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class DeAuthenticatorService {

	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async deAuthenticate(): Promise<{ success: true } | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.logout({sessionID: this.__localSessionID.get()})
		);
	}
}

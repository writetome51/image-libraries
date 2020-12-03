import { AuthenticationRestAPIService }
	from '@services/authentication/authentication-rest-api.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '@services/get-object-from-subscription.service';
import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';


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

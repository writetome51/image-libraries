import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { GetObjectFromSubscriptionService } from '../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class DeAuthenticatorService extends GetObjectFromSubscriptionService {

	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
		super();
	}


	async deAuthenticate(): Promise<{ success: true } | { error: { message: string } }> {
		return await this.go(
			this.__authenticationRestApi.logout({sessionID: this.__localSessionID.get()})
		);
	}
}

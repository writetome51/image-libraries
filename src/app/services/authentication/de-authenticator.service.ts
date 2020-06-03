import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';


@Injectable({providedIn: 'root'})

export class DeAuthenticatorService {

	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async deAuthenticate(): Promise<string>
		// JSON containing: {success: true} | {error: {message: string}}
	{
		return await getSubscriptionData(
			this.__authenticationRestApi.logout({sessionID: this.__localSessionID.get()})
		);
	}
}

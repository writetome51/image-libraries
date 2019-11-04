import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserService } from '../user/current-user.service';
import { ReturnObjectFromSubscriptionService } from '../return-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticatorService extends ReturnObjectFromSubscriptionService {

	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __currentUser: CurrentUserService
	) {
		super();
	}


	async authenticate() {
		return await this._getObjectFromSubscriptionTo(
			this.__authenticationRestApi.login(
				{email: this.__currentUser.email, password: this.__currentUser.password}
			)
		);
	}
}

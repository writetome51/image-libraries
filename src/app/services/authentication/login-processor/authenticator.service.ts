import { Injectable } from '@angular/core';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { AuthenticationRestAPIService } from '../authentication-rest-api.service';
import { CurrentUserService } from '../../user/current-user.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticatorService {

	constructor(
		private __authenticationRestApi: AuthenticationRestAPIService,
		private __currentUser: CurrentUserService
	) {
	}


	async authenticate() {
		return await getSubscriptionData(
			this.__authenticationRestApi.login(
				{email: this.__currentUser.email, password: this.__currentUser.password}
			)
		);
	}
}

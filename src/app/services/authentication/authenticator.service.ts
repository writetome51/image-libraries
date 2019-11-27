import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserService as currentUser } from '../user/current-user.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class AuthenticatorService {

	constructor(private __authenticationRestApi: AuthenticationRestAPIService) {
	}


	async authenticate() {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.login(
				{email: currentUser.email, password: currentUser.password}
			)
		);
	}


	async authenticateBySecurityQuestion() {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.securityQuestionLogin(
				{email: currentUser.email, securityQuestion: currentUser.securityQuestion}
			)
		);
	}


	async getSecurityQuestion() {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.getSecurityQuestion({email: currentUser.email})
		);
	}

}

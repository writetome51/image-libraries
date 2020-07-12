import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserData as currentUser }
	from '../../../data-structures/runtime-state-data/static-classes/current-user.data';
import { DBUser } from '../../../interfaces/db-user';
import {
	GetObjectFromSubscriptionService as getObjectFromSubscription,
	GetObjectFromSubscriptionService
} from '../get-object-from-subscription.service';
import { SecurityQuestion } from '../../../interfaces/security-question';


@Injectable({providedIn: 'root'})

export class AuthenticatorService {

	constructor(private __authenticationRestApi: AuthenticationRestAPIService) {
	}


	async authenticate(): Promise<DBUser | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.login(
				{email: currentUser.email, password: currentUser.password}
			)
		);
	}


	async authenticateBySecurityQuestion(): Promise<DBUser | { error: { message: string } }>
	{
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.securityQuestionLogin(
				{email: currentUser.email, securityQuestion: currentUser.securityQuestion}
			)
		);
	}


	async getSecurityQuestion(): Promise<SecurityQuestion | { error: { message: string } }>
	{
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.getSecurityQuestion({email: currentUser.email})
		);
	}

}

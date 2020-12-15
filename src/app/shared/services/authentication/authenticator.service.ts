import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';
import { Injectable } from '@angular/core';
import { SecurityQuestion } from '@interfaces/security-question';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})

export class AuthenticatorService {

	constructor(private __authenticationRestApi: AuthenticationRestAPIService,

				//test: passed
				private __realm: MongoDBRealmService
	) {
	}


	async authenticate(): Promise<DBUser | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.login(
				{email: currentUser.email, password: currentUser.password}
			)
		);
	}


	async authenticateBySecurityQuestion(): Promise<DBUser | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.securityQuestionLogin(
				{email: currentUser.email, securityQuestion: currentUser.securityQuestion}
			)
		);
	}


	async getSecurityQuestion(): Promise<SecurityQuestion | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__authenticationRestApi.getSecurityQuestion({email: currentUser.email})
		);
	}

}

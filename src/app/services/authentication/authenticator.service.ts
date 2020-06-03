import { Injectable } from '@angular/core';
import { AuthenticationRestAPIService } from './authentication-rest-api.service';
import { CurrentUserData as currentUser }
	from '../../../data-structures/runtime-state-data/static-classes/current-user.data';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { DBUser } from '../../../interfaces/db-user';


@Injectable({providedIn: 'root'})

export class AuthenticatorService {

	constructor(private __authenticationRestApi: AuthenticationRestAPIService) {
	}


	async authenticate(): Promise<string> // JSON containing: DBUser | {error: {message: string}}
	{
		return await getSubscriptionData(
			this.__authenticationRestApi.login(
				{email: currentUser.email, password: currentUser.password}
			)
		);
	}


	async authenticateBySecurityQuestion(): Promise<string>
		// JSON containing: DBUser | {error: {message: string}}
	{
		return await getSubscriptionData(
			this.__authenticationRestApi.securityQuestionLogin(
				{email: currentUser.email, securityQuestion: currentUser.securityQuestion}
			)
		);
	}


	async getSecurityQuestion(): Promise<string>
		// JSON containing: {question: string, answer: string} | {error: {message: string}}
	{
		return await getSubscriptionData(
			this.__authenticationRestApi.getSecurityQuestion({email: currentUser.email})
		);
	}

}

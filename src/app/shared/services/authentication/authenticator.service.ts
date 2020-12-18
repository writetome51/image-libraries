import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user';
import { Injectable } from '@angular/core';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';
import { SecurityQuestion } from '@interfaces/security-question';


@Injectable({providedIn: 'root'})
export class AuthenticatorService {

	constructor(private __realm: MongoDBRealmService) {
	}


	async authenticate(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn(
			'loginAndReturnUser',
			{email: currentUser.email, password: currentUser.password}
		);
	}


	async authenticateBySecurityQuestion(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn(
			'loginBySecurityQuestionAndReturnUser',
			{email: currentUser.email, securityQuestion: currentUser.securityQuestion}
		);
	}


	async getSecurityQuestion(): Promise<SecurityQuestion | { error: { message: string } }> {
		return await this.__realm.callFn('getSecurityQuestion', {email: currentUser.email});
	}

}

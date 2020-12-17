import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/db-user';
import { Injectable } from '@angular/core';
import { SecurityQuestion } from '@interfaces/security-question';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class AuthenticatorService {

	constructor(private __realm: MongoDBRealmService) {
	}


	async authenticate(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn(
			'loginAndReturnUser',
			[{email: currentUser.email, password: currentUser.password}]
		);
	}


	async authenticateBySecurityQuestion(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realm.callFn(
			'loginBySecurityQuestion',
			[{email: currentUser.email, securityQuestion: currentUser.securityQuestion}]
		);
	}


	async getSecurityQuestion(): Promise<SecurityQuestion | { error: { message: string } }> {
		return await this.__realm.callFn('getSecurityQuestion', [{email: currentUser.email}]);
	}

}

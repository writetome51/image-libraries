import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/app-user/db-user';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SecurityQuestion } from '@interfaces/security-question';


@Injectable({providedIn: 'root'})
export class AuthenticatorService {

	constructor(private __realmFn: MongoDBRealmFunctionService) {
	}


	async authenticate(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realmFn.call('pub_loginAndReturnUser',
			{email: currentUser.email, password: currentUser.password}
		);
	}


	async authenticateBySecurityQuestion(): Promise<DBUser | { error: { message: string } }> {
		return await this.__realmFn.call('pub_loginBySecurityQuestionAndReturnUser',
			{email: currentUser.email, securityQuestion: currentUser.securityQuestion}
		);
	}


	async getSecurityQuestion(): Promise<SecurityQuestion | { error: { message: string } }> {
		return await this.__realmFn.call('pub_getSecurityQuestion', {email: currentUser.email});
	}

}

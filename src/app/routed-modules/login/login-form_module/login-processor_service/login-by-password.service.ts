import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { DBUser } from '@interfaces/app-user/db-user.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { LoginServicesModule } from '@app/routed-modules/login/login-services.module';


@Injectable({providedIn: LoginServicesModule})
export class LoginByPasswordService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {
	}


	async go(): Promise<DBUser | HasError> {
		return await this.__realmFn.call('pub_loginAndReturnUser',
			{email: currentUser.email, password: currentUser.password}
		);
	}

}

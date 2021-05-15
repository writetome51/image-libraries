import { UserRecord } from '@interfaces/user-record.interface';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LoginFormServicesModule } from '../login-form-services.module';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';


@Injectable({providedIn: LoginFormServicesModule})
export class LoginByPasswordService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {}


	async go(email, password): Promise<UserRecord | HasError> {
		return await this.__realmFn.call('pub_loginAndReturnUser',
			{email, password}
		);
	}

}

import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { DBUser } from '@interfaces/db-user.interface';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LoginFormServicesModule } from '../login-form-services.module';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';


@Injectable({providedIn: LoginFormServicesModule})
export class LoginByPasswordService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {}


	async go(): Promise<DBUser | HasError> {
		return await this.__realmFn.call('pub_loginAndReturnUser',
			{email: currentUserForm.email, password: currentUserForm.password}
		);
	}

}

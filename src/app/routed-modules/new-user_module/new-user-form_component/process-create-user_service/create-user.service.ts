import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { UserRecord } from '@interfaces/user-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { HasError } from '@interfaces/has-error.interface';
import { NewUserServicesModule } from '../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class CreateUserService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {}


	async go(): Promise<UserRecord | HasError> {
		return await this.__realmFn.call(
			'pub_createAndReturnUser',
			// We don't want to pass entire `currentUser`, but only these 3 properties.
			{
				email: currentUserForm.email,
				password: currentUserForm.password,
				securityQuestion: currentUserForm.securityQuestion
			}
		);
	}

}

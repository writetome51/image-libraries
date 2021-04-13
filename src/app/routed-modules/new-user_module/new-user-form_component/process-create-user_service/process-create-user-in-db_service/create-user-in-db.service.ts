import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { UserDBRecord } from '@interfaces/user-db-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { HasError } from '@interfaces/has-error.interface';
import { NewUserServicesModule } from '../../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class CreateUserInDbService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {}


	async go(): Promise<UserDBRecord | HasError> {
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

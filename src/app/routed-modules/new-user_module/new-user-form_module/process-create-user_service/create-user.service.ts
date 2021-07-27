import { UserRecord } from '@interfaces/user-record.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { HasError } from '@interfaces/has-error.interface';
import { NewUserFormServicesModule } from '../new-user-form-services.module';
import { GetResult } from '@interfaces/get-result.interface';


@Injectable({providedIn: NewUserFormServicesModule})
export class CreateUserService implements GetResult {

	constructor(private __realmFn: MongoDBRealmFunctionService) {}


	async go(
		email, password, passwordAgain, question, answer
	): Promise<UserRecord | HasError> {

		return await this.__realmFn.call(
			'pub_createAndReturnUser',
			// We only need to pass these 3 properties.
			{
				email,
				password,
				securityQuestion: {question, answer}
			}
		);
	}

}

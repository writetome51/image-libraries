import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { UserRecord } from '@interfaces/user-record.interface';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/db/mongo-db-realm-function.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { SecurityQuestionServicesModule } from '../../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class LoginBySecurityQuestionService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {}


	async go(): Promise<UserRecord | HasError> {
		return await this.__realmFn.call('pub_loginBySecurityQuestionAndReturnUser',
			{email: currentUserForm.email, securityQuestion: currentUserForm.securityQuestion}
		);
	}

}

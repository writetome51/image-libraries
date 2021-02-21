import { CurrentUserData as currentUser }
	from '@runtime-state-data/static-classes/current-user.data';
import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@services/mongo-db-realm-function.service';
import { SecurityQuestion } from '@interfaces/security-question.interface';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { SecurityQuestionServicesModule } from '../../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class GetSecurityQuestionService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {
	}


	async go(): Promise<SecurityQuestion | HasError> {
		return await this.__realmFn.call('pub_getSecurityQuestion', {email: currentUser.email});
	}

}

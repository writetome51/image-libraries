import { Injectable } from '@angular/core';
import { MongoDBRealmFunctionService } from '@db/mongo-db-realm-function.service';
import { AnsweredQuestion } from '@interfaces/answered-question.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { HasError } from '@interfaces/has-error.interface';
import { SecurityQuestionServicesModule } from '../../../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class GetSecurityQuestionService implements IDoThis {

	constructor(private __realmFn: MongoDBRealmFunctionService) {}


	async go(email): Promise<AnsweredQuestion | HasError> {
		return await this.__realmFn.call('pub_getSecurityQuestion', {email});
	}

}

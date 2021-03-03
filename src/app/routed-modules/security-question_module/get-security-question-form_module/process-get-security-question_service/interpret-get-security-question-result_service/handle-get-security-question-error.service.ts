import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { userDoesntExist } from '@string-constants/mongo-db-realm-function-errors';
import { noAccountWithThatEmail } from '@string-constants/form-submission-errors';
import { SecurityQuestionServicesModule } from '../../../security-question-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class HandleGetSecurityQuestionErrorService extends HandleDbOperationErrorService {

	async go(error) {
		if (error.message.includes(userDoesntExist)) {
			alert.error = noAccountWithThatEmail;
		}
		else await super.go(error);
	}

}

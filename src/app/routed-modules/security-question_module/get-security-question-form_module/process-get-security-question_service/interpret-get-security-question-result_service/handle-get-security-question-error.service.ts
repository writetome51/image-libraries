import { Injectable } from '@angular/core';
import { AlertsService as alerts } from '@services/alerts.service';
import { userDoesntExist } from '@string-constants/mongo-db-realm-function-errors';
import { noAccountWithThatEmail } from '@string-constants/form-submission-errors';
import { SecurityQuestionServicesModule } from '../../../security-question-services.module';
import { HandleExistingUserDBOperationErrorService }
	from '@process/handle-error/handle-existing-user-db-operation-error_service/handle-existing-user-db-operation-error.service';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class HandleGetSecurityQuestionErrorService
	extends HandleExistingUserDBOperationErrorService {

	async go(error) {
		if (error.message.includes(userDoesntExist)) {
			alerts.setError(noAccountWithThatEmail);
		}
		else await super.go(error);
	}

}

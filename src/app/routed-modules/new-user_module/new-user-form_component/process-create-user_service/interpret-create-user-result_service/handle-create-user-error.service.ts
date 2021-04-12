import { AlertService as alert } from '@services/alert.service';
import { accountAlreadyExists } from '@string-constants/form-submission-errors';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: NewUserServicesModule})
export class HandleCreateUserErrorService extends HandleDbOperationErrorService {

	async go(error: {message: string}) {
		if (error.message.includes(duplicate)) alert.setError(accountAlreadyExists);
		else await super.go(error);
	}

}

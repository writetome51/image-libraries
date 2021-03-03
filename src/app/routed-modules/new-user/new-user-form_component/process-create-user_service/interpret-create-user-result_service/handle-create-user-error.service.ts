import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { accountAlreadyExists } from '@string-constants/form-submission-errors';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '@app/routed-modules/new-user/new-user-services.module';
import { HandleDbOperationErrorService } from '@process-related/handle-error/handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: NewUserServicesModule})
export class HandleCreateUserErrorService extends HandleDbOperationErrorService {

	async go(error) {
		if (error.message.includes(duplicate)) alert.error = accountAlreadyExists;
		else await super.go(error);
	}

}

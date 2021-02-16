import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { accountAlreadyExists } from '@string-constants/form-submission-errors';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '@app/routed-modules/new-user/new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class HandleCreateUserErrorService extends HandleDataTransportProcessErrorService {

	async go(error) {
		if (error.message.includes(duplicate)) alert.error = accountAlreadyExists;
		else await super.go(error);
	}

}

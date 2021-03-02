import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { accountAlreadyExists } from '@string-constants/form-submission-errors';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '@app/routed-modules/new-user/new-user-services.module';
import { HandleDataTransportErrorService } from '@services/process-related/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: NewUserServicesModule})
export class HandleCreateUserErrorService extends HandleDataTransportErrorService {

	async go(error) {
		if (error.message.includes(duplicate)) alert.error = accountAlreadyExists;
		else await super.go(error);
	}

}

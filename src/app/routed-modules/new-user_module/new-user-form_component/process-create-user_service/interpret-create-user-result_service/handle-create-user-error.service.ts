import { AlertService as alert } from '@services/alert.service';
import { accountAlreadyExists } from '@string-constants/form-submission-errors';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { HandleErrorService } from '@process/handle-error/handle-error.service';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class HandleCreateUserErrorService extends HandleErrorService {

	async go(error: {message: string}) {
		if (error.message.includes(duplicate)) alert.setError(accountAlreadyExists);
		else await super.go(error);
	}

}

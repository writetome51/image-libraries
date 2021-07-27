import { AlertsService as alerts } from '@services/alerts.service';
import { accountAlreadyExists } from '@string-constants/form-submission-errors';
import { duplicate } from '@string-constants/mongo-db-realm-function-errors';
import { HandleErrorService } from '@handle-error/handle-error.service';
import { Injectable } from '@angular/core';
import { NewUserFormServicesModule } from '../../../new-user-form-services.module';


@Injectable({providedIn: NewUserFormServicesModule})
export class HandleCreateUserErrorService extends HandleErrorService {

	async go(error: {message: string}) {
		if (error.message.includes(duplicate)) alerts.setError(accountAlreadyExists);
		else await super.go(error);
	}

}

import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { userDoesntExist } from '@string-constants/rest-api-errors';
import { noAccountWithThatEmail } from '@string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})
export class HandleGetSecurityQuestionErrorService extends HandleDataTransportProcessErrorService {

	async go(error) {
		if (error.message.includes(userDoesntExist)) {
			alert.error = noAccountWithThatEmail;
		}
		else await super.go(error);
	}

}

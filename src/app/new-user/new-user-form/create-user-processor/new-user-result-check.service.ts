import { Injectable } from '@angular/core';
import { HandleDataTransportProcessErrorService }	// tslint:disable-next-line:max-line-length
	from 'handle-data-transport-process-error/handle-data-transport-process-error.service';
import { AlertData as alert }
	from '@runtime-state-data/static-classes/alert.data';
import { accountAlreadyExists } from '@string-constants/form-submission-errors';
import { duplicate } from '@string-constants/rest-api-errors';


@Injectable({providedIn: 'root'})
export class NewUserResultCheckService extends HandleDataTransportProcessErrorService {

	async go(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = accountAlreadyExists;
		else await super.go(errMessage);
	}

}

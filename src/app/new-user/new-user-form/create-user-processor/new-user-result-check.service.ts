import { Injectable } from '@angular/core';
import { DataTransportResultCheckService }	// tslint:disable-next-line:max-line-length
	from '@data-transport-result-check/data-transport-result-check.service';
import { AlertData as alert }
	from '@runtime-state-data/static-classes/alert.data';
import { accountAlreadyExists } from '@string-constants/form-submission-errors';
import { duplicate } from '@string-constants/rest-api-errors';


@Injectable({providedIn: 'root'})
export class NewUserResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = accountAlreadyExists;
		else await super._errorHandler(errMessage);
	}

}

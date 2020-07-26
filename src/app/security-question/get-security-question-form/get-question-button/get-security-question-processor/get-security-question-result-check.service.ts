import { DataTransportResultCheckService }	// tslint:disable-next-line:max-line-length
	from '../../../../shared/services/data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { userDoesntExist } from '../../../../../string-constants/rest-api-errors';
import { noAccountWithThatEmail } from '../../../../../string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionResultCheckService extends DataTransportResultCheckService {


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(userDoesntExist)) {
			alert.error = noAccountWithThatEmail;
		}
		else await super._errorHandler(errMessage);
	}


}

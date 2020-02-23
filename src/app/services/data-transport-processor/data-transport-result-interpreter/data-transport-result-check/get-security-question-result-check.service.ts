import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { Injectable } from '@angular/core';
import { AlertService as alert } from '../../../alert.service';
import { userDoesntExist } from '../../../../string-constants/rest-api-errors';
import { noAccountWithThatEmail } from '../../../../string-constants/form-submission-errors';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionResultCheckService extends DataTransportResultCheckService {


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(userDoesntExist)) {
			alert.error = noAccountWithThatEmail;
		}
		else await super._errorHandler(errMessage);
	}


}

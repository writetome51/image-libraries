import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { AlertService as alert } from '../../../alert.service';
import { userAlreadyExists } from '../../../../string-constants/form-submission-errors';
import { duplicate } from '../../../../string-constants/api-errors';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultCheckService extends DataTransportResultCheckService {

	protected async _errorHandler(errMessage) {
		if (errMessage.includes(duplicate)) alert.error = userAlreadyExists;
		else await super._errorHandler(errMessage);
	}

}

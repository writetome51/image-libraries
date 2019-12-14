import { Injectable } from '@angular/core';
import { DataTransportResultCheckService } from './data-transport-result-check.service';
import { AlertService as alert } from '../../../alert.service';
import { userAlreadyExists } from '../../../../string-constants/form-submission-errors';
import { duplicateUser } from '../../../../string-constants/api-errors';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultCheckService extends DataTransportResultCheckService {

	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicateUser)) alert.error = userAlreadyExists;
		else super._errorHandler(errMessage);
	}

}

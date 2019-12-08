import { DataOperationResultCheckService } from './data-operation-result-check.service';
import { Injectable } from '@angular/core';
import { userDoesntExist } from '../../../../string-constants/api-errors';
import { AlertService as alert } from '../../../alert.service';
import { accountDoesntExist } from '../../../../string-constants/form-submission-errors';


@Injectable({
	providedIn: 'root'
})
export class GetSecurityQuestionResultCheckService extends DataOperationResultCheckService {


	protected async _errorHandler(errMessage) {
		if (errMessage.includes(userDoesntExist)) {
			alert.error = accountDoesntExist;
		}
		else super._errorHandler(errMessage);
	}


}

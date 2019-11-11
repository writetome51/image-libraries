import { Injectable } from '@angular/core';
import { DataOperationResultCheckService } from './data-operation-result-check.service';
import { AlertService as alert } from '../alert.service';
import { userAlreadyExists } from '../../../constants/form-submission-errors';
import { duplicateKey } from '../../../constants/api-errors';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultCheckService extends DataOperationResultCheckService {

	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicateKey)) alert.error = userAlreadyExists;
		else super._errorHandler(errMessage);
	}

}

import { Injectable } from '@angular/core';
import { DataOperationResultCheckService } from './data-operation-result-check.service';
import { AlertService } from '../alert.service';
import { userAlreadyExists } from '../../../constants/form-submission-errors';
import { duplicateKey } from '../../../constants/api-errors';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultCheckService extends DataOperationResultCheckService {

	constructor(_alert: AlertService) {
		super(_alert);
	}


	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicateKey)) this._alert.error = userAlreadyExists;
		else super._errorHandler(errMessage);
	}

}

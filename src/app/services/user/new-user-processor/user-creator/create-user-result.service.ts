import { Injectable } from '@angular/core';
import { DataOperationResultService } from '../../../data-operation-result/data-operation-result.service';
import { AlertService } from '../../../alert.service';
import { userAlreadyExists } from '../../../../../constants/form-submission-errors';
import { duplicateKey } from '../../../../../constants/api-errors';


@Injectable({
	providedIn: 'root'
})
export class CreateUserResultService extends DataOperationResultService {

	constructor(_alert: AlertService) {
		super(_alert);
	}


	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicateKey)) this._alert.error = userAlreadyExists;
		else super._errorHandler(errMessage);
	}


}

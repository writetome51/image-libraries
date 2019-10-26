import { Injectable } from '@angular/core';
import { DataOperationResultService } from '../../../data-operation-result.service';
import { AlertService } from '../../../alert.service';
import { userAlreadyExists } from '../../../../../constants/end-user-error-messages';
import { duplicateKey } from '../../../../../constants/api-error-messages';


@Injectable({
	providedIn: 'root'
})
export class CreateUserApiRequestResultService extends DataOperationResultService {

	constructor(_alert: AlertService) {
		super(_alert);
	}


	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicateKey)) this._alert.error = userAlreadyExists;
		else super._errorHandler(errMessage);
	}


}

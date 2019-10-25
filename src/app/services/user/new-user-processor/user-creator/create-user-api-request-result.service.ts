import { Injectable } from '@angular/core';
import { APIRequestResultService } from '../../../api-request-result.service';
import { AlertService } from '../../../alert.service';
import { userAlreadyExists } from '../../../../../constants/end-user-error-messages';
import { duplicateKey } from '../../../../../constants/api-error-messages';


@Injectable({
	providedIn: 'root'
})
export class CreateUserApiRequestResultService extends APIRequestResultService {

	constructor(_alert: AlertService) {
		super(_alert);
	}


	protected _errorHandler(errMessage) {
		if (errMessage.includes(duplicateKey)) this._alert.error = userAlreadyExists;
		else super._errorHandler(errMessage);
	}


}

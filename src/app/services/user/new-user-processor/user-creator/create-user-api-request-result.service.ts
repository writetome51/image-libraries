import { Injectable } from '@angular/core';
import { RestAPIRequestResultService } from '../../../rest-api-request-result.service';
import { SuccessOrErrorMessageService } from '../../../success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class CreateUserApiRequestResultService extends RestAPIRequestResultService {

	constructor(_successOrErrorMessage: SuccessOrErrorMessageService) {
		super(_successOrErrorMessage);

		this._errorHandler = (errMessage) => {
			if (errMessage.includes(
				`Duplicate key error: E11000 duplicate key error collection: rest-api.image-library-app-user index: email_1`
			)) {
				this._successOrErrorMessage.error = 'An account with that email already exists.';
			}
		};
	}


}

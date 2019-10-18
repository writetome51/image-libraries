import { Injectable } from '@angular/core';
import { RestAPIRequestResultService } from '../../../rest-api-request-result.service';
import { SuccessOrErrorMessageService } from '../../../success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class UserRestApiRequestResultService extends RestAPIRequestResultService {

	constructor(__successOrErrorMessage: SuccessOrErrorMessageService) {
		super(__successOrErrorMessage);

		this._errorHandler = (errMessage) => {
			if (errMessage.includes(
				`Duplicate key error: E11000 duplicate key error collection: rest-api.image-library-app-user index: email_1`
			)) {
				this._successOrErrorMessage.error = 'An account with that email already exists.';
			}
		};
	}


}


/**************************
 // This is error handler for when user is logging in:
 if (result.error.message.includes('Operation not performed.  No document matched the request criteria')) {
	this._successOrErrorMessage.error = result.error.message;
 }
 *************************/

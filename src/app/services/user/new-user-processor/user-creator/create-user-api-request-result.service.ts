import { Injectable } from '@angular/core';
import { RestAPIRequestResultService } from '../../../rest-api-request-result.service';
import { AlertService } from '../../../alert.service';


@Injectable({
	providedIn: 'root'
})
export class CreateUserApiRequestResultService extends RestAPIRequestResultService {

	constructor(_message: AlertService) {
		super(_message);

		this._errorHandler = (errMessage) => {
			if (errMessage.includes(
				`Duplicate key error: E11000 duplicate key error collection: rest-api.image-library-app-user index: email_1`
			)) {
				this._alert.error = 'An account with that email already exists.';
			}
		};
	}


}

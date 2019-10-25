import { Injectable } from '@angular/core';
import { APIRequestResultService } from '../../../api-request-result.service';
import { AlertService } from '../../../alert.service';


@Injectable({
	providedIn: 'root'
})
export class CreateUserApiRequestResultService extends APIRequestResultService {

	constructor(_alert: AlertService) {
		super(_alert);

		this._errorHandler = (errMessage) => {
			if (errMessage.includes(
				`Duplicate key error: E11000 duplicate key error collection: rest-api.image-library-app-user index: email_1`
			)) {
				this._alert.error = 'An account with that email already exists.';
			}
		};
	}


}

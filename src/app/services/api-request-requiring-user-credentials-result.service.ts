import { Injectable } from '@angular/core';
import { RestAPIRequestResultService } from './rest-api-request-result.service';
import { AlertService } from './alert.service';
import { ErrorFromWrongPasswordOrNonExistentUserService }
	from './error-from-wrong-password-or-non-existent-user.service';


@Injectable({
	providedIn: 'root'
})
export class ApiRequestRequiringUserCredentialsResultService extends RestAPIRequestResultService {
	constructor(
		_alert: AlertService,
		private __errorFromWrongPasswordOrNonExistentUser: ErrorFromWrongPasswordOrNonExistentUserService
	) {
		super(_alert);

		this._errorHandler = this.__errorFromWrongPasswordOrNonExistentUser.handler;
	}
}

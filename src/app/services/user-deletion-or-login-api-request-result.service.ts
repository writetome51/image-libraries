import { Injectable } from '@angular/core';
import { RestAPIRequestResultService } from './rest-api-request-result.service';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';
import { ErrorFromWrongPasswordOrNonExistentUserService }
	from './error-from-wrong-password-or-non-existent-user.service';


@Injectable({
	providedIn: 'root'
})
export class UserDeletionOrLoginApiRequestResultService extends RestAPIRequestResultService {
	constructor(
		_successOrErrorMessage: SuccessOrErrorMessageService,
		private __errorFromWrongPasswordOrNonExistentUser: ErrorFromWrongPasswordOrNonExistentUserService
	) {
		super(_successOrErrorMessage);

		this._errorHandler = this.__errorFromWrongPasswordOrNonExistentUser.handler;
	}
}

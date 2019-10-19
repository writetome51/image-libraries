import { Injectable } from '@angular/core';
import { RestAPIRequestResultService } from '../../rest-api-request-result.service';
import { SuccessOrErrorMessageService } from '../../success-or-error-message.service';
import { UserRestAPIService } from '../../user/user-rest-api.service';
import { CurrentUserService } from '../../user/current-user.service';


@Injectable({
	providedIn: 'root'
})
export class LoginApiRequestResultService extends RestAPIRequestResultService {

	constructor(
		_successOrErrorMessage: SuccessOrErrorMessageService,
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService
	) {
		super(_successOrErrorMessage);

		this._errorHandler = (errMessage) => {
			if (errMessage.includes(
				'Operation not performed.  No document matched the request criteria'
				// This means either the user does not exist in db or the submitted password is wrong.
				// We find out below:
			)) {
				let subscription = this.__userRestApi.exists(
					{email: this.__currentUser.email}
				).subscribe((result) => {

					if (result.success) this._successOrErrorMessage.error = 'Incorrect password';
					else this._successOrErrorMessage.error = 'User does not exist. Please create an account';

					subscription.unsubscribe();
				});
			}
		};
	}
}

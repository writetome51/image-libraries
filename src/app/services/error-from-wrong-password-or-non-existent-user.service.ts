import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { UserRestAPIService } from './user/user-rest-api.service';
import { CurrentUserService } from './user/current-user.service';


@Injectable({
	providedIn: 'root'
})
export class ErrorFromWrongPasswordOrNonExistentUserService {

	handler: (errorMessage) => void;


	constructor(
		private __alert: AlertService,
		private __userRestApi: UserRestAPIService,
		private __currentUser: CurrentUserService
	) {
		this.handler = (errMessage) => {
			if (errMessage.includes(
				'Operation not performed.  No document matched the request criteria'
				// This means either the user does not exist in db or the submitted password is wrong.
				// We find out below:
			)) {
				let subscription = this.__userRestApi.exists(
					{email: this.__currentUser.email}
				).subscribe((result) => {

					result = getObjectFromJSON(result);
					if (result.success) {
						this.__alert.error = 'Incorrect password';
					} else {
						this.__alert.error = 'User does not exist. Please create an account';
					}

					subscription.unsubscribe();
				});
			}
		};
	}
}

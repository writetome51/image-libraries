import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { CurrentUserService } from '../user/current-user.service';
import { AlertService } from '../alert.service';


@Injectable({
	providedIn: 'root'
})
export class EmailUpdateValidatorService {

	constructor(
		private __currentUser: CurrentUserService,
		private __alert: AlertService
	) {
	}


	isValid(): boolean {
		if (this.__currentUser.password.length < 6) {
			this.__alert.error = 'The current password must be at least 6 characters.';
		}
		else if (this.__currentUser.newPassword.length < 6) {
			this.__alert.error = 'The new password must be at least 6 characters.';
		}
		else if (this.__currentUser.newPassword !== this.__currentUser.passwordAgain) {
			this.__alert.error = 'The two new password inputs must match.';
		}

		return isEmpty(this.__alert.error);
	}


}

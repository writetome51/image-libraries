import { AlertService } from '../alert.service';
import { CurrentUserService } from '../user/current-user.service';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { UserValidationRulesService } from '../user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateValidatorService {

	constructor(
		private __userValidationRules: UserValidationRulesService,
		private __currentUser: CurrentUserService,
		private __alert: AlertService
	) {
	}


	isValid(): boolean {
		let min = this.__userValidationRules.passwordMinLength;

		if (this.__currentUser.password.length < min) {
			this.__alert.error = `The current password must be at least ${min} characters.`;
		}
		else if (this.__currentUser.newPassword.length < min) {
			this.__alert.error = `The new password must be at least ${min} characters.`;
		}
		else if (this.__currentUser.newPassword !== this.__currentUser.passwordAgain) {
			this.__alert.error = 'The two new password inputs must match.';
		}

		return isEmpty(this.__alert.error);
	}


}

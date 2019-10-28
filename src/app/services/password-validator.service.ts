import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { UserValidationRulesService } from './user/user-validation-rules.service';
import { CurrentUserService } from './user/current-user.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordValidatorService {


	check_newPassword = false;


	constructor(
		private __alert: AlertService,
		private __currentUser: CurrentUserService,
		private __userValidationRules: UserValidationRulesService
	) {
	}


	validate(): void {
		let min = this.__userValidationRules.passwordMinLength;
		if (this.__currentUser.password.length < min) {
			this.__alert.error = `The password must be at least ${min} characters.`;
		}
		else if (this.check_newPassword) {
			if (this.__currentUser.newPassword.length < min) {
				this.__alert.error = `The new password must be at least ${min} characters.`;
			}
			else if (this.__currentUser.newPassword !== this.__currentUser.passwordAgain) {
				this.__alert.error = 'The two new password inputs must match.';
			}
		}
		else if (this.__currentUser.password !== this.__currentUser.passwordAgain) {
			this.__alert.error = `The two password inputs must match.`;
		}
	}


}

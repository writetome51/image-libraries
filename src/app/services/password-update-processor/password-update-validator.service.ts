import { AlertService } from '../alert.service';
import { CurrentUserService } from '../user/current-user.service';
import { Injectable } from '@angular/core';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { FormValidatorService } from '../form-validator.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateValidatorService extends FormValidatorService {

	constructor(
		_alert: AlertService,
		private __userValidationRules: UserValidationRulesService,
		private __currentUser: CurrentUserService
	) {
		super(_alert);
	}


	protected _uniqueCode(): void {
		let min = this.__userValidationRules.passwordMinLength;

		if (this.__currentUser.password.length < min) {
			this._alert.error = `The current password must be at least ${min} characters.`;
		}
		else if (this.__currentUser.newPassword.length < min) {
			this._alert.error = `The new password must be at least ${min} characters.`;
		}
		else if (this.__currentUser.newPassword !== this.__currentUser.passwordAgain) {
			this._alert.error = 'The two new password inputs must match.';
		}
	}


}

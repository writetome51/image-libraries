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
		let emailMin = this.__userValidationRules.emailMinLength;
		let pwordMin = this.__userValidationRules.passwordMinLength;
		
		if (this.__currentUser.email.length < emailMin) {
			this._alert.error = `The email must be at least ${emailMin} characters.`;
		}
		else if (this.__currentUser.password.length < pwordMin) {
			this._alert.error = `The current password must be at least ${pwordMin} characters.`;
		}
		else if (this.__currentUser.newPassword.length < pwordMin) {
			this._alert.error = `The new password must be at least ${pwordMin} characters.`;
		}
		else if (this.__currentUser.newPassword !== this.__currentUser.passwordAgain) {
			this._alert.error = 'The two new password inputs must match.';
		}
	}


}

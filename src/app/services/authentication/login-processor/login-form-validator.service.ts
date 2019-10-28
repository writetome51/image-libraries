import { CurrentUserService } from '../../user/current-user.service';
import { Injectable } from '@angular/core';
import { AlertService } from '../../alert.service';
import { UserValidationRulesService } from '../../user/user-validation-rules.service';
import { FormValidatorService } from '../../form-validator.service';


@Injectable({
	providedIn: 'root'
})
export class LoginFormValidatorService extends FormValidatorService {


	constructor(
		_alert: AlertService,
		private __currentUser: CurrentUserService,
		private __userValidationRules: UserValidationRulesService
	) {
		super(_alert);
	}


	protected _uniqueCode(): void {
		let emailMinLength = this.__userValidationRules.emailMinLength;
		let pwordMinLength = this.__userValidationRules.passwordMinLength;

		if (this.__currentUser.email.length < emailMinLength) {
			this._alert.error = `The email must be at least ${emailMinLength} characters.`;
		}
		else if (this.__currentUser.password.length < pwordMinLength) {
			this._alert.error = `The password must be at least ${pwordMinLength} characters.`;
		}
	}


}

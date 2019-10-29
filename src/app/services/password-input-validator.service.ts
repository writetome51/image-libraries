import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { UserValidationRulesService } from './user/user-validation-rules.service';
import { CurrentUserService } from './user/current-user.service';
import { InputValidatorService } from './input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordInputValidatorService extends InputValidatorService {


	constructor(
		__alert: AlertService,
		protected _userValidationRules: UserValidationRulesService,
		private __currentUser: CurrentUserService
	) {
		super(__alert);

		this._inputLabel = 'password';
		this._requirement = `at least ${this._userValidationRules.passwordMinLength} characters`;
		this._ifTrue_isNotValid = () => (
			this.__currentUser.password.length < this._userValidationRules.passwordMinLength
		);
	}


}

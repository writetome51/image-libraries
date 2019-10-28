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
		_userValidationRules: UserValidationRulesService,
		__alert: AlertService,
		private __currentUser: CurrentUserService
	) {
		super(_userValidationRules, __alert);

		this._inputLabel = 'password';
		this._requirement = `at least ${this._userValidationRules.passwordMinLength} characters`;
		this._ifTrue_isNotValid = () => (
			this.__currentUser.password.length < this._userValidationRules.passwordMinLength
		);
	}


}

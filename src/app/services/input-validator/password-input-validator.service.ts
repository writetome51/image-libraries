import { Injectable } from '@angular/core';
import { AlertService } from '../alert.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { CurrentUserService } from '../user/current-user.service';
import { InputValidatorService } from './input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordInputValidatorService extends InputValidatorService {


	constructor(
		protected _currentUser: CurrentUserService,
		protected _userValidationRules: UserValidationRulesService,
		__alert: AlertService
	) {
		super(__alert);

		let min = this._userValidationRules.passwordMinLength;

		this.errorMessage = `The password must have at least ${min} characters`;
		this._ifTrue_isNotValid = () => (this._currentUser.password.length < min);
	}


}

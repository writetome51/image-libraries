import { Injectable } from '@angular/core';
import { AlertService } from '../alert.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { CurrentUserService } from '../user/current-user.service';
import { PasswordInputValidatorService } from '../input-validator/password-input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class NewPasswordInputValidatorService extends PasswordInputValidatorService {


	constructor(
		_currentUser: CurrentUserService,
		_userValidationRules: UserValidationRulesService,
		__alert: AlertService
	) {
		super(_currentUser, _userValidationRules, __alert);

		this.errorMessage = 'The new password' + this.errorMessage.slice(12);
		this._ifTrue_isNotValid = () => (
			this._currentUser.newPassword.length < this._userValidationRules.passwordMinLength
		);
	}


}

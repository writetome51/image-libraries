import { AlertService } from '../alert.service';
import { CurrentUserService } from '../user/current-user.service';
import { EmailInputValidatorService } from '../input-validator/email-input-validator.service';
import { Injectable } from '@angular/core';
import { UserValidationRulesService } from '../user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class NewEmailInputValidatorService extends EmailInputValidatorService {

	constructor(
		_currentUser: CurrentUserService,
		_userValidationRules: UserValidationRulesService,
		__alert: AlertService,
	) {
		super(_currentUser, _userValidationRules, __alert);

		this.errorMessage = `The new email` + this.errorMessage.slice(9);
		this._ifTrue_isNotValid = () => (
			this._currentUser.newEmail.length < this._userValidationRules.emailMinLength
		);
	}
}

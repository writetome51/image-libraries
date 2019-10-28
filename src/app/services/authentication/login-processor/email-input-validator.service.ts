import { Injectable } from '@angular/core';
import { InputValidatorService } from '../../input-validator.service';
import { UserValidationRulesService } from '../../user/user-validation-rules.service';
import { AlertService } from '../../alert.service';
import { CurrentUserService } from '../../user/current-user.service';


@Injectable({
	providedIn: 'root'
})
export class EmailInputValidatorService extends InputValidatorService {

	constructor(
		_userValidationRules: UserValidationRulesService,
		__alert: AlertService,
		private __currentUser: CurrentUserService
	) {
		super(_userValidationRules, __alert);

		this._inputLabel = 'email';
		this._requirement = `at least ${this._userValidationRules.emailMinLength} characters`;
		this._ifTrue_isNotValid = () => (
			this.__currentUser.email.length < this._userValidationRules.emailMinLength
		);
	}
}

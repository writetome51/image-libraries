import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { UserValidationRulesService } from './user/user-validation-rules.service';
import { CurrentUserService } from './user/current-user.service';
import { InputValidatorService } from './input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordAgainInputValidatorService extends InputValidatorService {


	constructor(
		_userValidationRules: UserValidationRulesService,
		__alert: AlertService,
		private __currentUser: CurrentUserService
	) {
		super(_userValidationRules, __alert);

		this._inputLabel = 'password again input';
		this._requirement = `match the password input`;
		this._ifTrue_isNotValid = () => (
			this.__currentUser.password !== this.__currentUser.passwordAgain
		);
	}


}

import { Injectable } from '@angular/core';
import { InputValidatorService } from './input-validator.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { AlertService } from '../alert.service';
import { CurrentUserService } from '../user/current-user.service';


@Injectable({
	providedIn: 'root'
})
export class EmailInputValidatorService extends InputValidatorService {

	constructor(
		protected _currentUser: CurrentUserService,
		protected _userValidationRules: UserValidationRulesService,
		__alert: AlertService
	) {
		super(__alert);

		this.errorMessage = `The email must be at least ${this._userValidationRules.emailMinLength} characters`;
		this._ifTrue_isNotValid = () => (
			this._currentUser.email.length < this._userValidationRules.emailMinLength
		);
	}
}

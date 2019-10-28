import { AlertService } from '../alert.service';
import { CurrentUserService } from '../user/current-user.service';
import { Injectable } from '@angular/core';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { FormValidatorService } from '../form-validator.service';


@Injectable({
	providedIn: 'root'
})
export class EmailUpdateValidatorService extends FormValidatorService {

	constructor(
		_alert: AlertService,
		private __currentUser: CurrentUserService,
		private __userValidationRules: UserValidationRulesService
	) {
		super(_alert);
	}


	protected _uniqueCode(): void {
		let min = this.__userValidationRules.emailMinLength;

		if (this.__currentUser.email.length < min) {
			this._alert.error = `The current email must be at least ${min} characters.`;
		}
		else if (this.__currentUser.newEmail.length < min) {
			this._alert.error = `The new email must be at least ${min} characters.`;
		}
	}


}

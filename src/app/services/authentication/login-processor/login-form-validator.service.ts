import { CurrentUserService } from '../../user/current-user.service';
import { Injectable } from '@angular/core';
import { AlertService } from '../../alert.service';
import { UserValidationRulesService } from '../../user/user-validation-rules.service';
import { FormValidatorService } from '../../form-validator.service';
import { EmailInputValidatorService } from './email-input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class LoginFormValidatorService extends FormValidatorService {


	constructor(
		_alert: AlertService,
		private __emailInputValidator: EmailInputValidatorService,
		private __userValidationRules: UserValidationRulesService
	) {
		super(_alert);
	}


	protected _uniqueCode(): void {
		this.__emailInputValidator.validate();

		if (this.__currentUser.password.length < pwordMinLength) {
			this._alert.error = `The password must be at least ${pwordMinLength} characters.`;
		}
	}


}

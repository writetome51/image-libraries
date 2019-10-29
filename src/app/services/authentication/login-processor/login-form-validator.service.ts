import { Injectable } from '@angular/core';
import { AlertService } from '../../alert.service';
import { FormValidatorService } from '../../form-validator.service';
import { EmailInputValidatorService } from '../../input-validator/email-input-validator.service';
import { PasswordInputValidatorService } from '../../input-validator/password-input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class LoginFormValidatorService extends FormValidatorService {


	constructor(
		emailInputValidator: EmailInputValidatorService,
		passwordInputValidator: PasswordInputValidatorService,
		_alert: AlertService
	) {
		super(_alert);

		this._inputValidators = [emailInputValidator, passwordInputValidator];
	}


}

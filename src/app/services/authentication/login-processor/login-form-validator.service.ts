import { Injectable } from '@angular/core';
import { AlertService } from '../../alert.service';
import { FormValidatorService } from '../../form-validator.service';
import { EmailInputValidatorService } from './email-input-validator.service';
import { PasswordInputValidatorService } from '../../password-input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class LoginFormValidatorService extends FormValidatorService {


	constructor(
		_alert: AlertService,
		emailInputValidator: EmailInputValidatorService,
		passwordInputValidator: PasswordInputValidatorService
	) {
		super(_alert);

		this._inputValidators = [emailInputValidator, passwordInputValidator];
	}


}

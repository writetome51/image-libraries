import { AlertService } from '../alert.service';
import { Injectable } from '@angular/core';
import { FormValidatorService } from '../form-validator.service';
import { EmailInputValidatorService } from '../input-validator/email-input-validator.service';
import { PasswordInputValidatorService } from '../input-validator/password-input-validator.service';
import { NewEmailInputValidatorService } from './new-email-input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class EmailUpdateFormValidatorService extends FormValidatorService {

	constructor(
		emailInputValidator: EmailInputValidatorService,
		newEmailInputValidator: NewEmailInputValidatorService,
		passwordInputValidator: PasswordInputValidatorService,
		_alert: AlertService
	) {
		super(_alert);

		emailInputValidator.errorMessage =
			'The current email' + emailInputValidator.errorMessage.slice(9);

		this._inputValidators = [
			emailInputValidator, newEmailInputValidator, passwordInputValidator
		];
	}


}

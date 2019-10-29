import { AlertService } from '../alert.service';
import { Injectable } from '@angular/core';
import { FormValidatorService } from '../form-validator.service';
import { EmailInputValidatorService } from '../authentication/login-processor/email-input-validator.service';
import { PasswordInputValidatorService } from '../password-input-validator.service';
import { PasswordAgainInputValidatorService } from '../password-again-input-validator.service';
// @ts-ignore
let getObjectCopy = require('copy-object');


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateFormValidatorService extends FormValidatorService {

	constructor(
		_alert: AlertService,
		emailInputValidator: EmailInputValidatorService,
		passwordInputValidator: PasswordInputValidatorService,
		passwordAgainInputValidator: PasswordAgainInputValidatorService
	) {
		super(_alert);

		let newPasswordInputValidator: PasswordInputValidatorService = getObjectCopy(
			passwordInputValidator
		);
		passwordInputValidator.errorMessage =
			'The current password' + passwordInputValidator.errorMessage.slice(12);

		newPasswordInputValidator.errorMessage =
			'The new password' + newPasswordInputValidator.errorMessage.slice(12);

		passwordAgainInputValidator.updatingPassword = true;
		passwordAgainInputValidator.errorMessage = 'The two new password inputs must match';

		this._inputValidators = [
			emailInputValidator,
			passwordInputValidator,
			newPasswordInputValidator,
			passwordAgainInputValidator
		];
	}


}

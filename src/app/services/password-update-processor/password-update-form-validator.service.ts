import { AlertService } from '../alert.service';
import { Injectable } from '@angular/core';
import { FormValidatorService } from '../form-validator.service';
import { EmailInputValidatorService }
	from '../input-validator/email-input-validator.service';
import { PasswordInputValidatorService } from '../input-validator/password-input-validator.service';
import { PasswordAgainInputValidatorService } from '../input-validator/password-again-input-validator.service';
import { NewPasswordInputValidatorService } from './new-password-input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordUpdateFormValidatorService extends FormValidatorService {


	constructor(
		_alert: AlertService,
		emailInputValidator: EmailInputValidatorService,
		passwordInputValidator: PasswordInputValidatorService,
		newPasswordInputValidator: NewPasswordInputValidatorService,
		passwordAgainInputValidator: PasswordAgainInputValidatorService
	) {
		super(_alert);

		passwordInputValidator.errorMessage =
			'The current password' + passwordInputValidator.errorMessage.slice(12);

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

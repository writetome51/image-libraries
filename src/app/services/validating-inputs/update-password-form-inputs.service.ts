import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from '../alert.service';
import { EmailInputService } from '../validating-input/email-input.service';
import { CurrentPasswordInputService } from '../validating-input/current-password-input.service';
import { NewPasswordInputService } from '../validating-input/new-password-input.service';
import { PasswordAgainInputService } from '../validating-input/password-again-input.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordFormInputsService extends AppValidatingInputsService {


	constructor(
		__alert: AlertService,
		emailInput: EmailInputService,
		currentPasswordInput: CurrentPasswordInputService,
		newPasswordInput: NewPasswordInputService,
		passwordAgainInput: PasswordAgainInputService
	) {
		super(
			__alert,
			emailInput,
			currentPasswordInput,
			newPasswordInput,
			passwordAgainInput
		);
	}


}

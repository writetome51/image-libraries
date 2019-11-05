import { Injectable } from '@angular/core';
import { PasswordInputService } from '../validating-input/password-input.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from '../alert.service';
import { CurrentEmailInputService } from '../validating-input/current-email-input.service';
import { NewEmailInputService } from '../validating-input/new-email-input.service';
import { InputsValidatorService } from '../../validating-inputs/inputs-validator.service';


@Injectable({
	providedIn: 'root'
})
export class UpdateEmailFormInputsService extends AppValidatingInputsService {

	constructor(
		__alert: AlertService,
		__inputsValidator: InputsValidatorService,
		currentEmailInput: CurrentEmailInputService,
		newEmailInput: NewEmailInputService,
		passwordInput: PasswordInputService
	) {
		super(
			__alert,
			__inputsValidator,
			currentEmailInput,
			newEmailInput,
			passwordInput
		);
	}

}

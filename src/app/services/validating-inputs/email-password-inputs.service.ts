import { Injectable } from '@angular/core';
import { EmailInputService } from '../validating-input/email-input.service';
import { PasswordInputService } from '../validating-input/password-input.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from '../alert.service';
import { InputsValidatorService } from '../../validating-inputs/inputs-validator.service';


@Injectable({
	providedIn: 'root'
})
export class EmailPasswordInputsService extends AppValidatingInputsService {

	constructor(
		__alert: AlertService,
		__inputsValidator: InputsValidatorService,
		emailInput: EmailInputService,
		passwordInput: PasswordInputService
	) {
		super(__alert, __inputsValidator, emailInput, passwordInput);
	}

}

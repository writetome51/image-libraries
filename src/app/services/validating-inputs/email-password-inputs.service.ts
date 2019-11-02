import { Injectable } from '@angular/core';
import { EmailInputService } from '../validating-input/email-input.service';
import { PasswordInputService } from '../validating-input/password-input.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from '../alert.service';


@Injectable({
	providedIn: 'root'
})
export class EmailPasswordInputsService extends AppValidatingInputsService {

	constructor(
		__alert: AlertService,
		emailInput: EmailInputService,
		passwordInput: PasswordInputService
	) {
		super(__alert, emailInput, passwordInput);
	}

}

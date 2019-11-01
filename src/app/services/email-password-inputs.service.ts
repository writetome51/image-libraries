import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { PasswordInputService } from './password-input.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from './alert.service';


@Injectable({
	providedIn: 'root'
})
export class EmailPasswordInputsService extends AppValidatingInputsService {


	constructor(
		emailInput: EmailInputService,
		passwordInput: PasswordInputService,
		__alert: AlertService
	) {
		super(__alert);

		this.data = [emailInput.data, passwordInput.data];
	}


}

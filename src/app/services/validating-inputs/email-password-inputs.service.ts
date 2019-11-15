import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { EmailInputService } from '../validating-input/email-input.service';
import { PasswordInputService } from '../validating-input/password-input.service';


@Injectable({providedIn: 'root'})

export class EmailPasswordInputsService extends AppValidatingInputsService {

	constructor(
		emailInput: EmailInputService,
		passwordInput: PasswordInputService
	) {
		super(
			emailInput,
			passwordInput
		);
	}

}

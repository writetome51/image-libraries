import { Injectable } from '@angular/core';
import { EmailInputService } from '../validating-input/email-input.service';
import { PasswordInputService } from '../validating-input/password-input.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from '../alert.service';


@Injectable({
	providedIn: 'root'
})
export class EmailPasswordInputsServiceCopy extends AppValidatingInputsService {

	constructor(
		__alert: AlertService,
		emailInput: EmailInputService,
		passwordInput: PasswordInputService
	) {
		// The input services still need a value for data.objectToBind
		// emailInput.data.objectToBind = ???
		// passwordInput.data.objectToBind = ???
		// Might be better to assign value in separate class, i.e. a configuration service.


		super(
			__alert,
			emailInput,
			passwordInput
		);
	}

}

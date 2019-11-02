import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from './alert.service';
import { EmailInputService } from './validating-input/email-input.service';
import { CurrentPasswordInputService } from './validating-input/current-password-input.service';


@Injectable({
	providedIn: 'root'
})
export class UpdatePasswordFormInputsService extends AppValidatingInputsService {


	constructor(
		emailInput: EmailInputService,
		currentPasswordInput: CurrentPasswordInputService,

		__alert: AlertService
	) {
		super(__alert);

		this.data = [
			emailInput.data,
			currentPasswordInput.data,

		];
	}


}

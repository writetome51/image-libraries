import { Injectable } from '@angular/core';
import { PasswordInputService } from './validating-input/password-input.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { AlertService } from './alert.service';
import { CurrentEmailInputService } from './validating-input/current-email-input.service';
import { NewEmailInputService } from './validating-input/new-email-input.service';


@Injectable({
	providedIn: 'root'
})
export class EmailUpdateFormInputsService extends AppValidatingInputsService {


	constructor(
		currentEmailInput: CurrentEmailInputService,
		newEmailInput: NewEmailInputService,
		passwordInput: PasswordInputService,
		__alert: AlertService
	) {
		super(__alert);

		this.data = [
			currentEmailInput.data,
			newEmailInput.data,
			passwordInput.data
		];
	}


}

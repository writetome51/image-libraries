import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { EmailInputService } from '../validating-input/email-input.service';
import { CurrentPasswordInputService } from '../validating-input/current-password-input.service';
import { NewPasswordInputService } from '../validating-input/new-password-input.service';
import { NewPasswordAgainInputService } from '../validating-input/new-password-again-input.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordFormInputsService extends AppValidatingInputsService {

	constructor(
		emailInput: EmailInputService,
		currentPasswordInput: CurrentPasswordInputService,
		newPasswordInput: NewPasswordInputService,
		newPasswordAgainInput: NewPasswordAgainInputService
	) {
		super(
			emailInput,
			currentPasswordInput,
			newPasswordInput,
			newPasswordAgainInput
		);
	}

}

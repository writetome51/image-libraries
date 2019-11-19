import { Injectable } from '@angular/core';
import { EmailInputService } from '../validating-input/email-input.service';
import { CurrentPasswordInputService } from '../validating-input/current-password-input.service';
import { NewPasswordInputService } from '../validating-input/new-password-input.service';
import { NewPasswordAgainInputService } from '../validating-input/new-password-again-input.service';
import { CurrentUserInputsService } from './current-user-inputs.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordFormInputsService extends CurrentUserInputsService {

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

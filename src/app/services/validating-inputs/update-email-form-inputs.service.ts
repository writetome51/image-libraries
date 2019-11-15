import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { CurrentEmailInputService } from '../validating-input/current-email-input.service';
import { NewEmailInputService } from '../validating-input/new-email-input.service';
import { PasswordInputService } from '../validating-input/password-input.service';


@Injectable({providedIn: 'root'})

export class UpdateEmailFormInputsService extends AppValidatingInputsService {

	constructor(
		currentEmailInput: CurrentEmailInputService,
		newEmailInput: NewEmailInputService,
		passwordInput: PasswordInputService
	) {
		super(
			currentEmailInput,
			newEmailInput,
			passwordInput
		);
	}

}

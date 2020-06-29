import { Injectable } from '@angular/core';
import { EmailInputService } from '../../validating-input/email/email-input.service';
import { PasswordInputService } from '../../validating-input/password/password-input.service';
import { CurrentUserInputsService } from './current-user-inputs.service';


@Injectable({providedIn: 'root'})

export class LoginEmailPasswordInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailInputService, passwordInput: PasswordInputService) {
		super(emailInput, passwordInput);
	}

}

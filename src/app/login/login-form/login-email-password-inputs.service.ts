import { Injectable } from '@angular/core';
import { EmailInputService } from '../../services/validating-input/email-input.service';
import { PasswordInputService }
	from '../../services/validating-input/password/password-input.service';
import { CurrentUserInputsService }
	from '../../services/validating-inputs/current-user-inputs.service';


@Injectable({providedIn: 'root'})

export class LoginEmailPasswordInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailInputService, passwordInput: PasswordInputService) {
		super(emailInput, passwordInput);
	}

}

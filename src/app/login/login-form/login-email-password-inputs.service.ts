import { Injectable } from '@angular/core';
import { EmailInputService } from '../../shared/services/validating-input/email-input.service';
import { PasswordInputService }
	from '../../shared/services/validating-input/password/password-input.service';
import { CurrentUserInputsService }
	from '../../shared/services/validating-inputs/current-user-inputs.service';


@Injectable({providedIn: 'root'})

export class LoginEmailPasswordInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailInputService, passwordInput: PasswordInputService) {
		super(emailInput, passwordInput);
	}

}

import { CurrentUserInputsService } from '@services/validating-inputs/current-user-inputs.service';
import { EmailInputService } from '@services/validating-input/email-input.service';
import { Injectable } from '@angular/core';
import { PasswordInputService } from '@services/validating-input/password/password-input.service';


@Injectable()

export class LoginFormInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailInputService, passwordInput: PasswordInputService) {
		super(emailInput, passwordInput);
	}

}

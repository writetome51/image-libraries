import { CurrentUserInputsService }
	from '@services/current-user-inputs_service/current-user-inputs.abstract.service';
import { EmailInputService } from '@services/validating-input/email-input.service';
import { Injectable } from '@angular/core';
import { PasswordInputService } from '@services/validating-input/password-input.service';
import { LoginFormServicesModule } from './login-form-services.module';


@Injectable({providedIn: LoginFormServicesModule})
export class LoginFormInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailInputService, passwordInput: PasswordInputService) {
		super(emailInput, passwordInput);
	}

}

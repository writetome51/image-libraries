import { CurrentUserInputsService } from '@validating-inputs/current-user-inputs.service';
import { EmailInputService } from '@validating-input/email-input.service';
import { Injectable } from '@angular/core';
import { PasswordInputService } from '@validating-input/password/password-input.service';
import { LoginServicesModule } from '@app/routed-modules/login/login-services.module';


@Injectable({providedIn: LoginServicesModule})
export class LoginFormInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailInputService, passwordInput: PasswordInputService) {
		super(emailInput, passwordInput);
	}

}

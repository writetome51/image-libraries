import { CurrentUserInputsService } from '@validating-inputs/current-user-inputs.service';
import { EmailInputService } from '@validating-input/email-input.service';
import { Injectable } from '@angular/core';
import { PasswordInputService } from '@validating-input/password/password-input.service';
import { LoginFormServicesModule } from '@app/routed-modules/login/login-form_module/login-form-services.module';


@Injectable({providedIn: LoginFormServicesModule})
export class LoginFormInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailInputService, passwordInput: PasswordInputService) {
		super(emailInput, passwordInput);
	}

}

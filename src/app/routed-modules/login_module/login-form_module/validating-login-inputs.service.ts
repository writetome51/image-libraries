import { ValidatingCurrentUserInputsService }
	from '@services/validating-current-user-inputs_service/validating-current-user-inputs.abstract.service';
import { ValidatingEmailInputService } from '@validating-input/validating-email-input.service';
import { Injectable } from '@angular/core';
import { AppValidatingPasswordInputService }
	from '@validating-input/app-validating-password-input.service';
import { LoginFormServicesModule } from './login-form-services.module';


@Injectable({providedIn: LoginFormServicesModule})
export class ValidatingLoginInputsService extends ValidatingCurrentUserInputsService {

	constructor(
		emailInput: ValidatingEmailInputService, passwordInput: AppValidatingPasswordInputService
	) {
		super(emailInput, passwordInput);
	}

}

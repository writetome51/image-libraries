import { ValidatingCurrentUserInputsService }
	from '@services/validating-current-user-inputs_service/validating-current-user-inputs.abstract.service';
import { Injectable } from '@angular/core';
import { ValidatingLoggedInEmailVerificationInputService }
	from '../validating-logged-in-email-verification-input.service';
import { AppValidatingPasswordInputService } from '@validating-input/app-validating-password-input.service';
import { UpdateUserServicesModule } from '../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ValidatingDeleteUserInputsService extends ValidatingCurrentUserInputsService {

	constructor(
		loggedInEmailVerificationInput: ValidatingLoggedInEmailVerificationInputService,
		passwordInput: AppValidatingPasswordInputService
	) {
		super(
			loggedInEmailVerificationInput,
			passwordInput
		);
	}

}

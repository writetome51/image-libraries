import { ValidatingCurrentEmailInputService } from './validating-current-email-input.service';
import { ValidatingCurrentUserInputsService }
	from '@services/validating-current-user-inputs_service/validating-current-user-inputs.abstract.service';
import { Injectable } from '@angular/core';
import { ValidatingNewEmailInputService } from './validating-new-email-input.service';
import { AppValidatingPasswordInputService } from '@validating-input/app-validating-password-input.service';
import { UpdateUserServicesModule } from '../../update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ValidatingUpdateEmailInputsService extends ValidatingCurrentUserInputsService {

	constructor(
		currentEmailInput: ValidatingCurrentEmailInputService,
		newEmailInput: ValidatingNewEmailInputService,
		passwordInput: AppValidatingPasswordInputService
	) {
		super(
			currentEmailInput,
			newEmailInput,
			passwordInput
		);
	}

}

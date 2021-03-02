import { CurrentEmailInputService } from './current-email-input.service';
import { CurrentUserInputsService } from '@services/current-user-inputs/current-user-inputs.abstract.service';
import { Injectable } from '@angular/core';
import { NewEmailInputService } from './new-email-input.service';
import { PasswordInputService } from '@validating-input/password-related/password-input.service';
import { UpdateUserServicesModule } from '@app/routed-modules/update-user/update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class UpdateEmailInputsService extends CurrentUserInputsService {

	constructor(
		currentEmailInput: CurrentEmailInputService,
		newEmailInput: NewEmailInputService,
		passwordInput: PasswordInputService
	) {
		super(
			currentEmailInput,
			newEmailInput,
			passwordInput
		);
	}

}

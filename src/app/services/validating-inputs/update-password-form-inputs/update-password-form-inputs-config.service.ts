import { Injectable } from '@angular/core';
import { EmailInputService } from '../../validating-input/email-input.service';
import { CurrentUserService as currentUser} from '../../user/current-user.service';
import { ValidatingCurrentUserInputsConfigService }
	from '../validating-current-user-inputs-config.service';
import { CurrentPasswordInputService } from '../../validating-input/current-password-input.service';
import { NewPasswordInputService } from '../../validating-input/new-password-input.service';
import { NewPasswordAgainInputService } from '../../validating-input/new-password-again-input.service';


@Injectable({providedIn: 'root'})

export class UpdatePasswordFormInputsConfigService extends ValidatingCurrentUserInputsConfigService {

	constructor(
		emailInput: EmailInputService,
		currentPasswordInput: CurrentPasswordInputService,
		newPasswordInput: NewPasswordInputService,
		newPasswordAgainInput: NewPasswordAgainInputService
	) {
		super(
			emailInput,
			currentPasswordInput,
			newPasswordInput,
			newPasswordAgainInput
		);

		newPasswordAgainInput.data.objectToMatch = currentUser;
	}

}

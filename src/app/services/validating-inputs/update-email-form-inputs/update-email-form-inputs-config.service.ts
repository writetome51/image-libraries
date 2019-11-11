import { Injectable } from '@angular/core';
import { PasswordInputService } from '../../validating-input/password-input.service';
import { ValidatingCurrentUserInputsConfigService } from '../validating-current-user-inputs-config.service';
import { CurrentEmailInputService } from '../../validating-input/current-email-input.service';
import { NewEmailInputService } from '../../validating-input/new-email-input.service';


@Injectable({
	providedIn: 'root'
})
export class UpdateEmailFormInputsConfigService extends ValidatingCurrentUserInputsConfigService {

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

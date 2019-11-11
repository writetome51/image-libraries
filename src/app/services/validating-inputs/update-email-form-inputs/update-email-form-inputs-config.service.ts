import { Injectable } from '@angular/core';
import { PasswordInputService } from '../../validating-input/password-input.service';
import { CurrentUserService } from '../../user/current-user.service';
import { AppValidatingInputsConfigService } from '../app-validating-inputs-config.service';
import { CurrentEmailInputService } from '../../validating-input/current-email-input.service';
import { NewEmailInputService } from '../../validating-input/new-email-input.service';


@Injectable({
	providedIn: 'root'
})
export class UpdateEmailFormInputsConfigService extends AppValidatingInputsConfigService {

	constructor(
		currentUser: CurrentUserService,
		currentEmailInput: CurrentEmailInputService,
		newEmailInput: NewEmailInputService,
		passwordInput: PasswordInputService
	) {
		super(
			currentUser,
			currentEmailInput,
			newEmailInput,
			passwordInput
		);
	}

}

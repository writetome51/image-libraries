import { CurrentEmailInputService } from './current-email-input.service';
import { CurrentUserInputsService } from '@validating-inputs/current-user-inputs.service';
import { Injectable } from '@angular/core';
import { NewEmailInputService } from './new-email-input.service';
import { PasswordInputService } from '@validating-input/password/password-input.service';


@Injectable({providedIn: 'root'})

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

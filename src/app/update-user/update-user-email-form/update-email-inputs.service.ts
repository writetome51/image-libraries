import { Injectable } from '@angular/core';
import { CurrentEmailInputService }
	from '../../services/validating-input/email/current-email-input.service';
import { NewEmailInputService } from '../../services/validating-input/email/new-email-input.service';
import { PasswordInputService } from '../../services/validating-input/password/password-input.service';
import { CurrentUserInputsService }
	from '../../services/validating-inputs/current-user-inputs/current-user-inputs.service';


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

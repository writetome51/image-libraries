import { Injectable } from '@angular/core';
import { PasswordInputService } from '../../services/validating-input/password/password-input.service';
import { CurrentUserInputsService }
	from '../../services/validating-inputs/current-user-inputs/current-user-inputs.service';
import { LoggedInEmailVerificationInputService }
	from '../../services/validating-input/email/logged-in-email-verification-input.service';


@Injectable({providedIn: 'root'})

export class DeleteUserEmailPasswordInputsService extends CurrentUserInputsService {

	constructor(
		loggedInEmailVerificationInput: LoggedInEmailVerificationInputService,
		passwordInput: PasswordInputService
	) {
		super(
			loggedInEmailVerificationInput,
			passwordInput
		);
	}

}

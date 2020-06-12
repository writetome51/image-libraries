import { Injectable } from '@angular/core';
import { PasswordInputService } from '../../validating-input/password/password-input.service';
import { CurrentUserInputsService } from './current-user-inputs.service';
import { LoggedInEmailVerificationInputService }
	from '../../validating-input/email/logged-in-email-verification-input.service';


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
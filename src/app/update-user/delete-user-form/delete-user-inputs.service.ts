import { CurrentUserInputsService } from '@validating-inputs/current-user-inputs.service';
import { Injectable } from '@angular/core';
import { LoggedInEmailVerificationInputService } from '../logged-in-email-verification-input.service';
import { PasswordInputService } from '@validating-input/password/password-input.service';


@Injectable({providedIn: 'root'})

export class DeleteUserInputsService extends CurrentUserInputsService {

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

import { Injectable } from '@angular/core';
import { EmailInputService } from '../../validating-input/email-input.service';
import { PasswordInputService } from '../../validating-input/password-input.service';
import { CurrentUserService } from '../../user/current-user.service';
import { AppValidatingInputsConfigService } from '../app-validating-inputs-config.service';


@Injectable({
	providedIn: 'root'
})
export class EmailPasswordInputsConfigService extends AppValidatingInputsConfigService {

	constructor(
		currentUser: CurrentUserService,
		emailInput: EmailInputService,
		passwordInput: PasswordInputService,
	) {
		super(
			currentUser,
			emailInput,
			passwordInput
		);
	}

}

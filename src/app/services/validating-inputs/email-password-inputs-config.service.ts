import { Injectable } from '@angular/core';
import { EmailInputService } from '../validating-input/email-input.service';
import { PasswordInputService } from '../validating-input/password-input.service';
import { CurrentUserService } from '../user/current-user.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


@Injectable({
	providedIn: 'root'
})
export class EmailPasswordInputsConfigService {

	data: ValidatingInputService[];


	constructor(
		emailInput: EmailInputService,
		passwordInput: PasswordInputService,
		currentUser: CurrentUserService
	) {
		emailInput.data.objectToBind = currentUser;
		passwordInput.data.objectToBind = currentUser;

		this.data = [
			emailInput,
			passwordInput
		];
	}
}

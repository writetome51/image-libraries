import { Injectable } from '@angular/core';
import { ValidatingInputsService } from '../validating-inputs/validating-inputs.service';
import { EmailInputService } from './email-input.service';
import { PasswordInputService } from './password-input.service';


@Injectable({
	providedIn: 'root'
})
export class LoginFormInputsService extends ValidatingInputsService {


	constructor(
		emailInput: EmailInputService,
		passwordInput: PasswordInputService
	) {
		super();

		this.data = [emailInput.data, passwordInput.data];
	}


}

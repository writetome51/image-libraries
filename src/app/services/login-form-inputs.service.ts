import { Injectable } from '@angular/core';
import { ValidatingInputsService } from '../validating-inputs/validating-inputs.service';
import { CurrentUserService } from './user/current-user.service';
import { UserValidationRulesService } from './user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class LoginFormInputsService extends ValidatingInputsService {


	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super();

		this.data = [
			{
				type: 'text',
				id: 'email-input',
				propertyToBind: this.__currentUser.email,
				placeholder: 'Email',
				required: true,
				isValid: this.__currentUser.email.length >= this.__rules.emailMinLength,
				errorMessage:
					`The email must be at least ${this.__rules.emailMinLength} characters`,
				error: '', // If input is invalid, this is assigned value of errorMessage.
			},
			{
				type: 'password',
				id: 'password-input',
				propertyToBind: this.__currentUser.password,
				placeholder: 'Password',
				required: true,
				isValid: this.__currentUser.password.length >= this.__rules.passwordMinLength,
				errorMessage:
					`The password must be at least ${this.__rules.passwordMinLength} characters`,
				error: '',
			}
		];
	}


}

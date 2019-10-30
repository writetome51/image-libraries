import { Injectable } from '@angular/core';
import { ValidatingInput } from '../validating-inputs/validating-input';
import { CurrentUserService } from './user/current-user.service';
import { UserValidationRulesService } from './user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordInputService {


	data: ValidatingInput = {
		type: 'password',
		id: 'password-input',
		propertyToBind: this.__currentUser.password,
		placeholder: 'Password',
		required: true,
		isValid: () => this.__currentUser.password.length >= this.__rules.passwordMinLength,
		errorMessage:
			`The password must be at least ${this.__rules.passwordMinLength} characters`,
		error: '',
	};


	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
	}


}

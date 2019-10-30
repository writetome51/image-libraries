import { Injectable } from '@angular/core';
import { ValidatingInput } from '../validating-inputs/validating-input';
import { CurrentUserService } from './user/current-user.service';
import { UserValidationRulesService } from './user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class EmailInputService {


	data: ValidatingInput = {
		type: 'text',
		id: 'email-input',
		propertyToBind: this.__currentUser.email,
		placeholder: 'Email',
		required: true,
		isValid: () => this.__currentUser.email.length >= this.__rules.emailMinLength,
		errorMessage:
			`The email must be at least ${this.__rules.emailMinLength} characters`,
		error: ''
	};


	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
	}


}

import { Injectable } from '@angular/core';
import { CurrentUserService } from './user/current-user.service';
import { UserValidationRulesService } from './user/user-validation-rules.service';
import { ValidatingInputService } from '../validating-inputs/validating-input.service';


@Injectable({
	providedIn: 'root'
})
export class EmailInputService extends ValidatingInputService {


	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super();

		this.data = {
			type: 'text',
			id: 'email-input',
			objectToBind: this.__currentUser,
			propertyToBind: 'email',
			placeholder: 'Email',
			hideLabel: true,
			required: true,
			isValid: () => this.__currentUser.email.length >= this.__rules.emailMinLength,
			errorMessage:
				`The email must be at least ${this.__rules.emailMinLength} characters`,
			error: ''
		};
	}


}

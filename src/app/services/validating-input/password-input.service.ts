import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordInputService extends ValidatingInputService {


	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super();

		this.data = {
			type: 'password',
			id: 'password-input',
			objectToBind: this.__currentUser,
			propertyToBind: 'password',
			placeholder: 'Password',
			hideLabel: true,
			required: true,
			isValid: () => this.__currentUser.password.length >= this.__rules.passwordMinLength,
			errorMessage:
				`The password must be at least ${this.__rules.passwordMinLength} characters`,
			error: '',
		};
	}


}

import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingPasswordInputService }
	from '../../validating-inputs/validating-password-input.service';


@Injectable({providedIn: 'root'})

export class PasswordInputService extends ValidatingPasswordInputService {

	constructor() {
		super();

		this.data.id = 'password-input';
		this.data.propertyToBind = 'password';
		this.data.label = 'Password';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.passwordMinLength
		);
		this.data.errorMessage = `The password must be at least ${rules.passwordMinLength} characters`;
	}

}

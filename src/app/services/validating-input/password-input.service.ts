import { Injectable } from '@angular/core';
import { UserValidationRulesData as rules } from '../../data-structures/read-only-data/user-validation-rules.data';
import { ValidatingPasswordInputService } from '@writetome51/validating-inputs';


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

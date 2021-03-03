import { Injectable } from '@angular/core';
import { UserValidationRuleData as rules } from '@read-only-data/user-validation-rule.data';
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
		this.data.errorMessage =
			`The password must be at least ${rules.passwordMinLength} characters`;
	}

}

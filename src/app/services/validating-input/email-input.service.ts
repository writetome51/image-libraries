import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class EmailInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'email-input';
		this.data.propertyToBind = 'email';
		this.data.label = 'Email';

		this.data.isValid = [
			() => (this.data.objectToBind[this.data.propertyToBind].length >= rules.emailMinLength),
			() => (not(this.data.objectToBind[this.data.propertyToBind].includes(' ')))
		];
		this.data.errorMessage = [
			`The email must be at least ${rules.emailMinLength} characters`,
			`The email must not include spaces`
		];
	}

}

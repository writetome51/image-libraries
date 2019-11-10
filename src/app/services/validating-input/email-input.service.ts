import { Injectable } from '@angular/core';
import { getDefaultTextInput } from '../../validating-inputs/get-input.functions';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';


@Injectable({providedIn: 'root'})

export class EmailInputService extends ValidatingInputService {

	constructor() {
		super();

		this.data = getDefaultTextInput();
		this.data.id = 'email-input';
		this.data.propertyToBind = 'email';
		this.data.placeholder = 'Email';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.emailMinLength
		);
		this.data.errorMessage = `The email must be at least ${rules.emailMinLength} characters`;
	}

}

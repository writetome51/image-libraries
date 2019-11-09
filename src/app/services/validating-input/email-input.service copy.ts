import { Injectable } from '@angular/core';
import { ValidatingInput } from '../../validating-inputs/validating-input';
import { getDefaultTextInput } from './get-input.functions';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { UserValidationRulesServiceCopy } from '../user/user-validation-rules.service copy';


@Injectable({
	providedIn: 'root'
})
export class EmailInputServiceCopy implements ValidatingInputService {

	data: ValidatingInput;


	constructor() {

		this.data = getDefaultTextInput();
		this.data.id = 'email-input';
		this.data.propertyToBind = 'email';
		this.data.placeholder = 'Email';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= UserValidationRulesServiceCopy.emailMinLength
		);
		this.data.errorMessage = `The email must be at least ${UserValidationRulesServiceCopy.emailMinLength} characters`;
	}

}

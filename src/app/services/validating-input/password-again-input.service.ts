import { Injectable } from '@angular/core';
import { ValidatingPasswordInputService }
	from '../../validating-inputs/validating-password-input.service';


@Injectable({providedIn: 'root'})

export class PasswordAgainInputService extends ValidatingPasswordInputService {

	constructor() {
		super();

		this.data.id = 'password-again-input';
		this.data.propertyToBind = 'passwordAgain';
		this.data.propertyToMatch = 'password';
		this.data.objectToMatch = undefined;
		this.data.placeholder = 'Password Again';

		this.data.isValid = () => (
			this.data.objectToMatch[this.data.propertyToMatch] ===
			this.data.objectToBind[this.data.propertyToBind]
		);
		this.data.errorMessage = 'The two password inputs must match';
	}

}

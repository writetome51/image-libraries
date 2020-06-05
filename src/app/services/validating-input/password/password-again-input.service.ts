import { Injectable } from '@angular/core';
import { ValidatingPasswordInputService } from '@writetome51/validating-inputs';


@Injectable({providedIn: 'root'})

export class PasswordAgainInputService extends ValidatingPasswordInputService {

	constructor() {
		super();

		this.data.id = 'password-again-input';
		this.data.propertyToBind = 'passwordAgain';
		this.data.propertyToMatch = 'password';
		this.data.label = 'Password Again';

		this.data.isValid = () => (
			this.data.objectToMatch[this.data.propertyToMatch] ===
			this.data.objectToBind[this.data.propertyToBind]
		);
		this.data.errorMessage = 'The two password inputs must match';
	}

}

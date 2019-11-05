import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { ComparisonValidatingInput } from '../../validating-inputs/comparison-validating-input';


@Injectable({
	providedIn: 'root'
})
export class PasswordAgainInputService extends CurrentUserDataInputService {

	data: ComparisonValidatingInput;


	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);

		this.data.type = 'password';
		this.data.id = 'password-again-input';
		this.data.propertyToBind = 'passwordAgain';
		this.data.placeholder = 'Password Again';
		this.data.objectToCompare = this.__currentUser;
		this.data.propertyToCompare = 'password';
		this.data.isValid = () => (
			this.data.objectToCompare[this.data.propertyToCompare] ===
			this.data.objectToBind[this.data.propertyToBind]
		);
		this.data.errorMessage = 'The two password inputs must match';
	}

}

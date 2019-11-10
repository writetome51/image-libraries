import { Injectable } from '@angular/core';
import { MatchingValidatingInput } from '../../validating-inputs/matching-validating-input';
import { PasswordInputServiceCopy } from './password-input.service copy';


@Injectable({
	providedIn: 'root'
})
export class PasswordAgainInputServiceCopy extends PasswordInputServiceCopy {

	data: MatchingValidatingInput;


	constructor() {
		super();

		this.data.id = 'password-again-input';
		this.data.propertyToBind = 'passwordAgain';
		this.data.propertyToMatch = 'password';
		this.data.placeholder = 'Password Again';

		this.data.isValid = () => (
			this.data.objectToMatch[this.data.propertyToMatch] ===
			this.data.objectToBind[this.data.propertyToBind]
		);
		this.data.errorMessage = 'The two password inputs must match';
	}

}

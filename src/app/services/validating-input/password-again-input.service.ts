import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { MatchingValidatingInput } from '../../validating-inputs/matching-validating-input';
import { CurrentUserDataInputService } from './current-user-data-input.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordAgainInputService extends CurrentUserDataInputService {

	data: MatchingValidatingInput;


	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);

		this.data.type = 'password';
		this.data.id = 'password-again-input';
		this.data.propertyToBind = 'passwordAgain';
		this.data.placeholder = 'Password Again';
		this.data.objectToMatch = __currentUser;
		this.data.propertyToMatch = 'password';
		this.data.isValid = () => (
			this.data.objectToMatch[this.data.propertyToMatch] ===
			this.data.objectToBind[this.data.propertyToBind]
		);
		this.data.errorMessage = 'The two password inputs must match';
	}

}

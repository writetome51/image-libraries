import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordAgainInputService extends ValidatingInputService {


	updatingPassword = false;


	get id() {
		if (this.updatingPassword) return 'new-password-again-input';
		else return 'password-again-input';
	}


	get errorMessage() {
		if (this.updatingPassword) return 'The two new password inputs must match';
		else return 'The two password inputs must match';
	}


	get placeholder() {
		if (this.updatingPassword) return 'New Password Again';
		else return 'Password Again';
	}


	constructor(private __currentUser: CurrentUserService) {
		super();

		this.data = {
			type: 'password',
			id: this.id,
			objectToBind: this.__currentUser,
			propertyToBind: 'passwordAgain',
			placeholder: this.placeholder,
			hideLabel: true,
			required: true,
			isValid: () => {
				if (this.updatingPassword) {
					return (this.__currentUser.newPassword === this.__currentUser.passwordAgain);
				}
				else return (this.__currentUser.password === this.__currentUser.passwordAgain);
			},
			errorMessage: this.errorMessage,
			error: ''
		};
	}


}

import { AlertService } from '../alert.service';
import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordAgainInputService extends ValidatingInputService {


	updatingPassword = false;


	get errorMessage() {
		if (this.updatingPassword) return 'The two new password inputs must match';
		else return 'The two password inputs must match'
	}


	constructor(
		__alert: AlertService,
		private __currentUser: CurrentUserService
	) {
		super();

		this.data = {
			type: 'password',
			id: 'password-again-input',
			objectToBind: this.__currentUser,
			propertyToBind: 'passwordAgain',
			placeholder: 'Password Again',
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

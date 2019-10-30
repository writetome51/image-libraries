import { Injectable } from '@angular/core';
import { AlertService } from '../alert.service';
import { CurrentUserService } from '../user/current-user.service';
import { InputValidatorService } from './input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class PasswordAgainInputValidatorService extends InputValidatorService {


	updatingPassword = false;


	constructor(
		__alert: AlertService,
		private __currentUser: CurrentUserService
	) {
		super(__alert);


		this._ifTrue_isNotValid = () => {
			if (this.updatingPassword) {
				this.errorMessage = 'The two new password inputs must match';
				return (this.__currentUser.newPassword !== this.__currentUser.passwordAgain);
			}
			else {
				this.errorMessage = 'The two password inputs must match';
				return (this.__currentUser.password !== this.__currentUser.passwordAgain);
			}
		};
	}


}

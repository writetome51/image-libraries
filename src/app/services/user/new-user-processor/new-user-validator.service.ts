import { CurrentUserService } from '../current-user.service';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { AlertService } from '../../alert.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserValidatorService {


	constructor(
		private __alert: AlertService,
		private __currentUser: CurrentUserService
	) {
	}


	isValid(): boolean {

		if (this.__currentUser.email.length < 6) {
			this.__alert.error = 'The email must be at least 6 characters.';
		}
		else if (this.__currentUser.password.length < 6){
			this.__alert.error = 'The password must be at least 6 characters.';
		}
		else if (this.__currentUser.password !== this.__currentUser.passwordAgain) {
			this.__alert.error = 'The two password inputs must match.';
		}
		else if (this.__currentUser.securityQuestion.question.length < 9){
			this.__alert.error = 'The security question must be at least 9 characters.';
		}
		else if (this.__currentUser.securityQuestion.answer.length < 3){
			this.__alert.error = 'The security answer must be at least 3 characters.';
		}

		return isEmpty(this.__alert.error);
	}


}

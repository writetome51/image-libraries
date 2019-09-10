import { Injectable } from '@angular/core';
import { ErrorMessageService } from './error-message.service';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { CurrentUserService } from './current-user.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserValidatorService {


	constructor(
		private __error: ErrorMessageService,
		private __currentUser: CurrentUserService
	) {
	}


	isValid(): boolean {
		this.__error.message = '';

		if (this.__currentUser.email.trim().length < 6) {
			this.__error.message = 'The email must be at least 6 characters.';
		}
		else if (this.__currentUser.password.trim().length < 6){
			this.__error.message = 'The password must be at least 6 characters.';
		}
		else if (this.__currentUser.password !== this.__currentUser.passwordAgain) {
			this.__error.message = 'The two password inputs must match.';
		}
		else if (this.__currentUser.securityQuestion.question.trim().length < 9){
			this.__error.message = 'The security question must be at least 9 characters.';
		}
		else if (this.__currentUser.securityQuestion.answer.trim().length < 3){
			this.__error.message = 'The security answer must be at least 3 characters.';
		}

		return isEmpty(this.__error.message);
	}


}

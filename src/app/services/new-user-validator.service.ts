import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { CurrentUserService } from './current-user.service';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserValidatorService {


	constructor(
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __currentUser: CurrentUserService
	) {
	}


	isValid(): boolean {

		if (this.__currentUser.email.trim().length < 6) {
			this.__successOrErrorMessage.error = 'The email must be at least 6 characters.';
		}
		else if (this.__currentUser.password.trim().length < 6){
			this.__successOrErrorMessage.error = 'The password must be at least 6 characters.';
		}
		else if (this.__currentUser.password !== this.__currentUser.passwordAgain) {
			this.__successOrErrorMessage.error = 'The two password inputs must match.';
		}
		else if (this.__currentUser.securityQuestion.question.trim().length < 9){
			this.__successOrErrorMessage.error = 'The security question must be at least 9 characters.';
		}
		else if (this.__currentUser.securityQuestion.answer.trim().length < 3){
			this.__successOrErrorMessage.error = 'The security answer must be at least 3 characters.';
		}

		return isEmpty(this.__successOrErrorMessage.error);
	}


}

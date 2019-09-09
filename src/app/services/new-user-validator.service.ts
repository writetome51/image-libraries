import { Injectable } from '@angular/core';
import { ErrorMessageService } from './error-message.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserValidatorService {


	constructor(private __error: ErrorMessageService) {
	}


	validate(user): void {
		if (user.email.trim().length < 6) {
			this.__error.message = 'The email must be at least 6 characters.';
		}
		else if (user.password.trim().length < 6){
			this.__error.message = 'The password must be at least 6 characters.';
		}
		else if (user.password !== user.passwordAgain) {
			this.__error.message = 'The two password inputs must match.';
		}
		else if (user.securityQuestion.question.trim().length < 9){
			this.__error.message = 'The security question must be at least 9 characters.';
		}
		else if (user.securityQuestion.answer.trim().length < 3){
			this.__error.message = 'The security answer must be at least 3 characters.';
		}
	}


}

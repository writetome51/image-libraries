import { CurrentUserService } from '../current-user.service';
import { Injectable } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { AlertService } from '../../alert.service';
import { UserValidationRulesService } from '../user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserValidatorService {


	constructor(
		private __alert: AlertService,
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
	}


	isValid(): boolean {
		// alert must be cleared first or this function will never return true:
		this.__alert.clear();
		let emailMin = this.__rules.emailMinLength;
		let pwordMin = this.__rules.passwordMinLength;
		let questionMin = this.__rules.questionMinLength;
		let answerMin = this.__rules.answerMinLength;

		if (this.__currentUser.email.length < emailMin) {
			this.__alert.error = `The email must be at least ${emailMin} characters.`;
		}
		else if (this.__currentUser.password.length < pwordMin){
			this.__alert.error = `The password must be at least ${pwordMin} characters.`;
		}
		else if (this.__currentUser.password !== this.__currentUser.passwordAgain) {
			this.__alert.error = `The two password inputs must match.`;
		}
		else if (this.__currentUser.securityQuestion.question.length < questionMin){
			this.__alert.error = `The security question must be at least ${questionMin} characters.`;
		}
		else if (this.__currentUser.securityQuestion.answer.length < answerMin){
			this.__alert.error = `The security answer must be at least ${answerMin} characters.`;
		}

		return isEmpty(this.__alert.error);
	}


}

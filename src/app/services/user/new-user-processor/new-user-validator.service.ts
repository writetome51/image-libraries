import { CurrentUserService } from '../current-user.service';
import { Injectable } from '@angular/core';
import { AlertService } from '../../alert.service';
import { UserValidationRulesService } from '../user-validation-rules.service';
import { FormValidatorService } from '../../form-validator.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserValidatorService extends FormValidatorService {


	constructor(
		_alert: AlertService,
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super(_alert);
	}


	protected _uniqueCode(): void {
		let emailMin = this.__rules.emailMinLength;
		let pwordMin = this.__rules.passwordMinLength;
		let questionMin = this.__rules.questionMinLength;
		let answerMin = this.__rules.answerMinLength;

		if (this.__currentUser.email.length < emailMin) {
			this._alert.error = `The email must be at least ${emailMin} characters.`;
		}
		else if (this.__currentUser.password.length < pwordMin){
			this._alert.error = `The password must be at least ${pwordMin} characters.`;
		}
		else if (this.__currentUser.password !== this.__currentUser.passwordAgain) {
			this._alert.error = `The two password inputs must match.`;
		}
		else if (this.__currentUser.securityQuestion.question.length < questionMin){
			this._alert.error = `The security question must be at least ${questionMin} characters.`;
		}
		else if (this.__currentUser.securityQuestion.answer.length < answerMin){
			this._alert.error = `The security answer must be at least ${answerMin} characters.`;
		}
	}


}

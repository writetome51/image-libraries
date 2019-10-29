import { Injectable } from '@angular/core';
import { AlertService } from '../../alert.service';
import { UserValidationRulesService } from '../user-validation-rules.service';
import { CurrentUserService } from '../current-user.service';
import { InputValidatorService } from '../../input-validator/input-validator.service';


@Injectable({
	providedIn: 'root'
})
export class SecurityAnswerInputValidatorService extends InputValidatorService {


	constructor(
		__alert: AlertService,
		protected _userValidationRules: UserValidationRulesService,
		private __currentUser: CurrentUserService
	) {
		super(__alert);

		let min = this._userValidationRules.answerMinLength;

		this.errorMessage = `The security answer must be at least ${min} characters.`;
		this._ifTrue_isNotValid = () => (this.__currentUser.securityQuestion.answer.length < min);
	}


}

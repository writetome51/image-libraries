import { Injectable } from '@angular/core';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class SecurityAnswerInputService extends ValidatingInputService {

	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super();

		this.data.type = 'password';
		this.data.id = 'security-answer-input';
		this.data.objectToBind = this.__currentUser;
		this.data.propertyToBind = 'answer';
		this.data.placeholder = 'Answer';
		this.data.isValid = () => this.__currentUser.answer.length >= this.__rules.answerMinLength;
		this.data.errorMessage =
			`The security answer must be at least ${this.__rules.answerMinLength} characters`;
	}

}

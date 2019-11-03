import { Injectable } from '@angular/core';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class SecurityQuestionInputService extends ValidatingInputService {

	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super();

		this.data.type = 'text';
		this.data.id = 'security-question-input';
		this.data.objectToBind = this.__currentUser;
		this.data.propertyToBind = 'question';
		this.data.placeholder = 'Question';
		this.data.isValid = () => this.__currentUser.question.length >= this.__rules.questionMinLength;
		this.data.errorMessage =
			`The security question must be at least ${this.__rules.questionMinLength} characters`;
		this.data.prompt =
			'Create a security question to ask yourself if you can\'t remember your password:';
	}

}

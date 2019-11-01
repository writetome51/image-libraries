import { Injectable } from '@angular/core';
import { ValidatingInputService } from '../validating-inputs/validating-input.service';
import { CurrentUserService } from './user/current-user.service';
import { UserValidationRulesService } from './user/user-validation-rules.service';


@Injectable({
	providedIn: 'root'
})
export class SecurityQuestionInputService extends ValidatingInputService {

	constructor(
		private __currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super();

		this.data = {
			type: 'text',
			id: 'security-question-input',
			objectToBind: this.__currentUser,
			propertyToBind: 'question',
			placeholder: 'Question',
			hideLabel: true,
			required: true,
			isValid: () => this.__currentUser.question.length >= this.__rules.questionMinLength,
			errorMessage:
				`The security question must be at least ${this.__rules.questionMinLength} characters`,
			error: '',
			prompt: 'Create a security question to ask yourself if you can\'t remember your password:'
		};
	}
}

import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingPasswordInputService }
	from '../../validating-inputs/framework-independent/validating-password-input.service';


@Injectable({providedIn: 'root'})

export class SecurityAnswerInputService extends ValidatingPasswordInputService {

	constructor() {
		super();

		this.data.id = 'security-answer-input';
		this.data.propertyToBind = 'answer';
		this.data.label = 'Answer';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.answerMinLength
		);
		this.data.errorMessage =
			`The security answer must be at least ${rules.answerMinLength} characters`;
	}

}

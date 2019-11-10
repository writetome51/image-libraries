import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { PasswordInputServiceCopy } from './password-input.service copy';


@Injectable({
	providedIn: 'root'
})
export class SecurityAnswerInputServiceCopy extends PasswordInputServiceCopy {

	constructor() {
		super();

		this.data.id = 'security-answer-input';
		this.data.propertyToBind = 'answer';
		this.data.placeholder = 'Answer';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.answerMinLength
		);
		this.data.errorMessage =
			`The security answer must be at least ${rules.answerMinLength} characters`;
	}

}

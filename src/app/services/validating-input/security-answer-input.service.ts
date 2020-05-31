import { Injectable } from '@angular/core';
import { UserValidationRulesData as rules } from '../../../data-structures/read-only-data/user-validation-rules.data';
import { ValidatingPasswordInputService } from '@writetome51/validating-inputs';


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

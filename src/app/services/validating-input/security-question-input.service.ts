import { Injectable } from '@angular/core';
import { UserValidationRulesData as rules } from '../../runtime-state-data/user-validation-rules.data';
import { ValidatingTextInputService } from '@writetome51/validating-inputs';


@Injectable({providedIn: 'root'})

export class SecurityQuestionInputService extends ValidatingTextInputService {

	constructor() {
		super();

		this.data.id = 'security-question-input';
		this.data.propertyToBind = 'question';
		this.data.label = 'Question';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.questionMinLength
		);
		this.data.errorMessage =
			`The security question must be at least ${rules.questionMinLength} characters`;
		this.data.prompt =
			'Create a security question to ask yourself if you can\'t remember your password:';
	}

}

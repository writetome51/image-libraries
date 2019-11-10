import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { getDefaultTextInput } from '../../validating-inputs/get-input.functions';
import { ValidatingInputService } from '../../validating-inputs/validating-input.service';


@Injectable({providedIn: 'root'})

export class SecurityQuestionInputService extends ValidatingInputService {

	constructor() {
		super();

		this.data = getDefaultTextInput();
		this.data.id = 'security-question-input';
		this.data.propertyToBind = 'question';
		this.data.placeholder = 'Question';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= rules.questionMinLength
		);
		this.data.errorMessage =
			`The security question must be at least ${rules.questionMinLength} characters`;
		this.data.prompt =
			'Create a security question to ask yourself if you can\'t remember your password:';
	}

}

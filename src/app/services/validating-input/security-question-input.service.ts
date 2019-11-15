import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingTextInputService } from '../../validating-inputs/validating-text-input.service';
import { Bind_ValidatingInputService_to_CurrentUserService }
	from './bind-validating-input-service-to-current-user-service.decorator';


@Injectable({providedIn: 'root'})
@Bind_ValidatingInputService_to_CurrentUserService()

export class SecurityQuestionInputService extends ValidatingTextInputService {

	constructor() {
		super();

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

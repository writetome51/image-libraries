import { Injectable } from '@angular/core';
import { UserValidationRulesService as rules } from '../user/user-validation-rules.service';
import { ValidatingPasswordInputService }
	from '../../validating-inputs/validating-password-input.service';
import { Bind_ValidatingInputService_to_CurrentUserService }
	from './bind-validating-input-service-to-current-user-service.decorator';


@Injectable({providedIn: 'root'})
@Bind_ValidatingInputService_to_CurrentUserService()

export class SecurityAnswerInputService extends ValidatingPasswordInputService {

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

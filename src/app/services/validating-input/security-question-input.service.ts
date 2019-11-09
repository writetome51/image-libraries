import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService as rules} from '../user/user-validation-rules.service';
import { CurrentUserDataInputService } from './current-user-data-input.service';


@Injectable({
	providedIn: 'root'
})
export class SecurityQuestionInputService extends CurrentUserDataInputService {

	constructor(__currentUser: CurrentUserService) {
		super(__currentUser);

		this.data.type = 'text';
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

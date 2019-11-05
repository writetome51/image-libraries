import { Injectable } from '@angular/core';
import { CurrentUserService } from '../user/current-user.service';
import { UserValidationRulesService } from '../user/user-validation-rules.service';
import { CurrentUserDataInputService } from './current-user-data-input.service';


@Injectable({
	providedIn: 'root'
})
export class SecurityAnswerInputService extends CurrentUserDataInputService {

	constructor(
		__currentUser: CurrentUserService,
		private __rules: UserValidationRulesService
	) {
		super(__currentUser);

		this.data.type = 'password';
		this.data.id = 'security-answer-input';
		this.data.propertyToBind = 'answer';
		this.data.placeholder = 'Answer';
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind].length >= this.__rules.answerMinLength
		);
		this.data.errorMessage =
			`The security answer must be at least ${this.__rules.answerMinLength} characters`;
	}

}

import { Injectable } from '@angular/core';
import { ValidatingInputsService } from '../validating-inputs/validating-inputs.service';
import { EmailInputService } from './email-input.service';
import { PasswordInputService } from './password-input.service';
import { PasswordAgainInputService } from './password-again-input.service';
import { SecurityQuestionInputService } from './security-question-input.service';
import { SecurityAnswerInputService } from './security-answer-input.service';


@Injectable({
	providedIn: 'root'
})
export class CreateUserFormInputsService extends ValidatingInputsService {


	constructor(
		emailInput: EmailInputService,
		passwordInput: PasswordInputService,
		passwordAgainInput: PasswordAgainInputService,
		questionInput: SecurityQuestionInputService,
		answerInput: SecurityAnswerInputService
	) {
		super();

		this.data = [
			emailInput.data,
			passwordInput.data,
			passwordAgainInput.data,
			questionInput.data,
			answerInput.data
		];
	}


}

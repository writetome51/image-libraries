import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { PasswordInputService } from './password-input.service';
import { PasswordAgainInputService } from './password-again-input.service';
import { SecurityQuestionInputService } from './security-question-input.service';
import { SecurityAnswerInputService } from './security-answer-input.service';
import { AlertService } from './alert.service';
import { AppValidatingInputsService } from './app-validating-inputs.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserFormInputsService extends AppValidatingInputsService {


	constructor(
		emailInput: EmailInputService,
		passwordInput: PasswordInputService,
		passwordAgainInput: PasswordAgainInputService,
		questionInput: SecurityQuestionInputService,
		answerInput: SecurityAnswerInputService,
		__alert: AlertService
	) {
		super(__alert);

		this.data = [
			emailInput.data,
			passwordInput.data,
			passwordAgainInput.data,
			questionInput.data,
			answerInput.data
		];
	}


}

import { Injectable } from '@angular/core';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { EmailInputService } from '../validating-input/email-input.service';
import { PasswordInputService } from '../validating-input/password-input.service';
import { PasswordAgainInputService } from '../validating-input/password-again-input.service';
import { SecurityQuestionInputService } from '../validating-input/security-question-input.service';
import { SecurityAnswerInputService } from '../validating-input/security-answer-input.service';
import { CurrentUserService as currentUser } from '../user/current-user.service';


@Injectable({providedIn: 'root'})

export class NewUserFormInputsService extends AppValidatingInputsService {

	constructor(
		emailInput: EmailInputService,
		passwordInput: PasswordInputService,
		passwordAgainInput: PasswordAgainInputService,
		questionInput: SecurityQuestionInputService,
		answerInput: SecurityAnswerInputService
	) {
		super(
			emailInput,
			passwordInput,
			passwordAgainInput,
			questionInput,
			answerInput
		);
	}

}

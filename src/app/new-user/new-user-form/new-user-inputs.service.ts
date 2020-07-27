import { Injectable } from '@angular/core';
import { EmailInputService } from '@services/validating-input/email-input.service';
import { PasswordInputService } from '@services/validating-input/password/password-input.service';
import { PasswordAgainInputService }
	from '@services/validating-input/password/password-again-input.service';
import { SecurityQuestionInputService } from './security-question-input.service';
import { CurrentUserInputsService } from '@services/validating-inputs/current-user-inputs.service';
import { SecurityAnswerInputService } from '@services/validating-input/security-answer-input.service';


@Injectable({providedIn: 'root'})

export class NewUserInputsService extends CurrentUserInputsService {

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

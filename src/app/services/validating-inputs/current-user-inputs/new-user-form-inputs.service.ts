import { Injectable } from '@angular/core';
import { EmailInputService } from '../../validating-input/email/email-input.service';
import { PasswordInputService } from '../../validating-input/password/password-input.service';
import { PasswordAgainInputService }
	from '../../validating-input/password/password-again-input.service';
import { SecurityQuestionInputService }
	from '../../validating-input/security-question/security-question-input.service';
import { CurrentUserInputsService } from './current-user-inputs.service';
import { SecurityAnswerInputService }
	from '../../validating-input/security-question/security-answer-input.service';


@Injectable({providedIn: 'root'})

export class NewUserFormInputsService extends CurrentUserInputsService {

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

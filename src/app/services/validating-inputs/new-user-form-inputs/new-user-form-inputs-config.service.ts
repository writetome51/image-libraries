import { Injectable } from '@angular/core';
import { EmailInputService } from '../../validating-input/email-input.service';
import { PasswordInputService } from '../../validating-input/password-input.service';
import { CurrentUserService } from '../../user/current-user.service';
import { ValidatingCurrentUserInputsConfigService } from '../validating-current-user-inputs-config.service';
import { PasswordAgainInputService } from '../../validating-input/password-again-input.service';
import { SecurityQuestionInputService } from '../../validating-input/security-question-input.service';
import { SecurityAnswerInputService } from '../../validating-input/security-answer-input.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserFormInputsConfigService extends ValidatingCurrentUserInputsConfigService {

	constructor(
		currentUser: CurrentUserService,
		emailInput: EmailInputService,
		passwordInput: PasswordInputService,
		passwordAgainInput: PasswordAgainInputService,
		questionInput: SecurityQuestionInputService,
		answerInput: SecurityAnswerInputService
	) {
		super(
			currentUser,
			emailInput,
			passwordInput,
			passwordAgainInput,
			questionInput,
			answerInput
		);
	}

}

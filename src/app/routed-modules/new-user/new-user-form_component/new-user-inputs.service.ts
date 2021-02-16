import { Injectable } from '@angular/core';
import { EmailInputService } from '@validating-input/email-input.service';
import { PasswordInputService } from '@validating-input/password/password-input.service';
import { PasswordAgainInputService }
	from '@validating-input/password/password-again-input.service';
import { SecurityQuestionInputService } from './security-question-input.service';
import { CurrentUserInputsService } from '@validating-inputs/current-user-inputs.service';
import { SecurityAnswerInputService }
	from '@validating-input/security-answer-input.service';
import { NewUserServicesModule } from '@app/routed-modules/new-user/new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
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

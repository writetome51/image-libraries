import { Injectable } from '@angular/core';
import { EmailInputService } from '@validating-input/email-input.service';
import { PasswordInputService } from '@validating-input/password-related/password-input.service';
import { PasswordAgainInputService }
	from '@validating-input/password-related/password-again-input.service';
import { SecurityQuestionInputService } from './security-question-input.service';
import { CurrentUserInputsService } from '@services/current-user-inputs/current-user-inputs.abstract.service';
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

import { Injectable } from '@angular/core';
import { ValidatingEmailInputService } from '@validating-input/validating-email-input.service';
import { AppValidatingPasswordInputService } from '@validating-input/app-validating-password-input.service';
import { ValidatingPasswordAgainInputService } from '@validating-input/validating-password-again-input.service';
import { ValidatingSecurityQuestionInputService } from './validating-security-question-input.service';
import { ValidatingCurrentUserInputsService }
	from '@services/validating-current-user-inputs_service/validating-current-user-inputs.abstract.service';
import { ValidatingSecurityAnswerInputService } from '@validating-input/validating-security-answer-input.service';
import { NewUserFormServicesModule } from '../new-user-form-services.module';


@Injectable({providedIn: NewUserFormServicesModule})
export class ValidatingNewUserInputsService extends ValidatingCurrentUserInputsService {

	constructor(
		emailInput: ValidatingEmailInputService,
		passwordInput: AppValidatingPasswordInputService,
		passwordAgainInput: ValidatingPasswordAgainInputService,
		questionInput: ValidatingSecurityQuestionInputService,
		answerInput: ValidatingSecurityAnswerInputService
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

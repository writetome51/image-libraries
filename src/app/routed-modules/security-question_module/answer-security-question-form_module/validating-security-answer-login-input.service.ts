import { Injectable } from '@angular/core';
import { ValidatingSecurityAnswerInputService } from '@validating-input/validating-security-answer-input.service';
import { CurrentUserFormInputsData } from '@runtime-state-data/static-classes/current-user-form-inputs.data';
import { SecurityQuestionServicesModule } from '../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class ValidatingSecurityAnswerLoginInputService
	extends ValidatingSecurityAnswerInputService {

	constructor() {
		super();
		this.data.prompt = `Enter your answer:`;
		this.data.objectToBind = CurrentUserFormInputsData;
	}

}

import { Injectable } from '@angular/core';
import { SecurityAnswerInputService }
	from '@services/validating-input-related/security-answer-input.service';
import { CurrentUserData } from '@runtime-state-data/static-classes/current-user.data';
import { SecurityQuestionServicesModule }
	from '@app/routed-modules/security-question/security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class SecurityAnswerLoginInputService extends SecurityAnswerInputService {

	constructor() {
		super();
		this.data.prompt = `Enter your answer:`;
		this.data.objectToBind = CurrentUserData;
	}

}

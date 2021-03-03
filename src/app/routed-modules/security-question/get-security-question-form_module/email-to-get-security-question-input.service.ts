import { Injectable } from '@angular/core';
import { EmailInputService } from '@services/validating-input/email-input.service';
import { CurrentUserData } from '@runtime-state-data/static-classes/current-user.data';
import { SecurityQuestionServicesModule }
	from '@app/routed-modules/security-question/security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class EmailToGetSecurityQuestionInputService extends EmailInputService {

	constructor() {
		super();
		this.data.prompt = `Enter email to receive security question:`;
		this.data.objectToBind = CurrentUserData;
	}

}

import { Injectable } from '@angular/core';
import { ValidatingEmailInputService } from '@validating-input/validating-email-input.service';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';
import { SecurityQuestionServicesModule } from '../../security-question-services.module';


@Injectable({providedIn: SecurityQuestionServicesModule})
export class ValidatingEmailToGetSecurityQuestionInputService extends ValidatingEmailInputService {

	constructor() {
		super();
		this.data.prompt = `Enter email to receive security question:`;
		this.data.objectToBind = CurrentUserFormInputsData;
	}

}

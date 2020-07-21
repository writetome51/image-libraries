import { Injectable } from '@angular/core';
import { CurrentUserInputsService }
	from '../../../services/validating-inputs/current-user-inputs.service';
import { EmailToGetSecurityQuestionInputService }
	from './email-to-get-security-question-input.service';


@Injectable({providedIn: 'root'})

export class GetSecurityQuestionInputsService extends CurrentUserInputsService {

	constructor(emailInput: EmailToGetSecurityQuestionInputService) {
		super(emailInput);
	}

}

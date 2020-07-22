import { Injectable } from '@angular/core';
import { CurrentUserInputsService }
	from '../../shared/services/validating-inputs/current-user-inputs.service';
import { SecurityAnswerToLoginInputService }
	from './security-answer-to-login-input.service';


@Injectable({providedIn: 'root'})

export class AnswerSecurityQuestionInputsService extends CurrentUserInputsService {

	constructor(answerInput: SecurityAnswerToLoginInputService) {
		super(answerInput);
	}

}

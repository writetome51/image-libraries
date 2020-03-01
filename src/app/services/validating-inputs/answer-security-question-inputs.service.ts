import { Injectable } from '@angular/core';
import { CurrentUserInputsService } from './current-user-inputs.service';
import { SecurityAnswerToLoginInputService }
	from '../validating-input/security-answer-to-login-input.service';


@Injectable({providedIn: 'root'})

export class AnswerSecurityQuestionInputsService extends CurrentUserInputsService {

	constructor(answerInput: SecurityAnswerToLoginInputService) {
		super(answerInput);
	}

}

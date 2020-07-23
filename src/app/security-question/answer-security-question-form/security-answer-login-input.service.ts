import { Injectable } from '@angular/core';
import { SecurityAnswerInputService }
	from '../../shared/services/validating-input/security-answer-input.service';
import { CurrentUserData }
	from '../../../data-structures/runtime-state-data/static-classes/current-user.data';


@Injectable({providedIn: 'root'})

export class SecurityAnswerLoginInputService extends SecurityAnswerInputService {

	constructor() {
		super();
		this.data.prompt = `Enter your answer:`;
		this.data.objectToBind = CurrentUserData;
	}

}

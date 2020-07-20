import { Injectable } from '@angular/core';
import { SecurityAnswerInputService } from '../../services/validating-input/security-answer-input.service';


@Injectable({providedIn: 'root'})

export class SecurityAnswerToLoginInputService extends SecurityAnswerInputService {

	constructor() {
		super();
		this.data.prompt = `Enter your answer:`;
	}

}

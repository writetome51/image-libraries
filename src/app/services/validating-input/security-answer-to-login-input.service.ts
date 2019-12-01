import { Injectable } from '@angular/core';
import { SecurityAnswerInputService } from './security-answer-input.service';


@Injectable({providedIn: 'root'})

export class SecurityAnswerToLoginInputService extends SecurityAnswerInputService {

	constructor() {
		super();
		this.data.prompt = `Enter your answer:`;
	}

}

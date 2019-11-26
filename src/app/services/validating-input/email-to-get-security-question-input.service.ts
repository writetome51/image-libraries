import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';


@Injectable({providedIn: 'root'})

export class EmailToGetSecurityQuestionInputService extends EmailInputService {

	constructor() {
		super();

		this.data.prompt = `Enter your email to receive your security question:`;
	}

}

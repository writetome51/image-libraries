import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { LocalEmailService } from '../local-data/local-email.service';


@Injectable({providedIn: 'root'})

export class LoggedInEmailVerificationInputService extends EmailInputService {

	constructor(private  __localEmail: LocalEmailService) {
		super();

		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind] === this.__localEmail.get()
		);

		this.data.errorMessage = `The email entered is not the logged-in user's email.`;
	}
}

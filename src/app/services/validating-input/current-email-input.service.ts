import { Injectable } from '@angular/core';
import { EmailInputService } from './email-input.service';
import { PrefixLabel_to_ValidatingInputService }
	from './prefix-label-to-validating-input-service.decorator';
import { LocalEmailService } from '../local-data/local-email.service';


@PrefixLabel_to_ValidatingInputService({prefix: 'current'})

export class __CurrentEmailInputService extends EmailInputService {

	constructor(private  __localEmail: LocalEmailService) {
		super();

		// @ts-ignore
		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind] === this.__localEmail.get()
		);

		// @ts-ignore
		this.data.errorMessage = `The email entered is not the logged-in user's email.`;
	}
}


@Injectable({providedIn: 'root'})

export class CurrentEmailInputService extends __CurrentEmailInputService {
}

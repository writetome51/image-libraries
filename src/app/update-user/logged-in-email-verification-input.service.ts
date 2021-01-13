import { EmailInputService } from '@services/validating-input/email-input.service';
import { Injectable } from '@angular/core';
import { EmailInBrowserStorageService }
	from '@item-in-browser-storage/email-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class LoggedInEmailVerificationInputService extends EmailInputService {

	constructor(private  __emailInBrowser: EmailInBrowserStorageService) {
		super();

		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind] === this.__emailInBrowser.get()
		);

		this.data.errorMessage = `The email entered is not the logged-in user's email.`;
	}
}

import { EmailInputService } from '@services/validating-input/email-input.service';
import { EmailInBrowserStorageService }
	from 'encrypted-item-in-browser-storage/email-in-browser-storage.service';
import { Injectable } from '@angular/core';


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

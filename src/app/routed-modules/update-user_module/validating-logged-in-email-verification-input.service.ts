import { ValidatingEmailInputService } from '@validating-input/validating-email-input.service';
import { EmailInBrowserStorageService }
	from '@services/browser-storage/email-in-browser-storage.service';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from './update-user-services.module';


@Injectable({providedIn: UpdateUserServicesModule})
export class ValidatingLoggedInEmailVerificationInputService extends ValidatingEmailInputService {

	constructor(private  __emailInBrowser: EmailInBrowserStorageService) {
		super();

		this.data.isValid = () => (
			this.data.objectToBind[this.data.propertyToBind] === this.__emailInBrowser.get()
		);

		this.data.errorMessage = `The email entered is not the logged-in user's email.`;
	}
}

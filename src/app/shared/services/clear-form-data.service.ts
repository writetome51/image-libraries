import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { ImageURLData as imageURL} from '@runtime-state-data/image-url.data';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { IDoThis } from '@interfaces/i-do-this.interface';


export class __ClearFormDataService {

	static go(): void {
		currentUserForm.password = '';

		currentUserForm.passwordAgain = '';

		currentUserForm.newPassword = '';

		currentUserForm.securityQuestion = {question: '', answer: ''};

		currentUserForm.email = '';

		currentUserForm.newEmail = '';

		newLibrary.name = '';

		imageURL.data = '';
	}

}

export const ClearFormDataService: IDoThis = __ClearFormDataService;

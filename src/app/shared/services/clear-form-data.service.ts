import { CurrentUserFormData as currentUserForm }
	from '@runtime-state-data/static-classes/current-user-form.data';
import { ImageURLData as imageURL} from '@runtime-state-data/image-url.data';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { SearchData as search } from '@runtime-state-data/static-classes/auto-resettable.data';


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

		search.by = '';
		search.text = '';
	}

}

export const ClearFormDataService: IDoThis = __ClearFormDataService;

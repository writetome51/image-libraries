import { CurrentUserData as currentUser } from '@runtime-state-data/static-classes/current-user.data';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { ImageURLData as imageURL} from '@runtime-state-data/image-url.data';
// import { IDoThis } from '@interfaces/i-do-this';


export class ClearFormDataService { // implements IDoThis

	static go(): void {
		currentUser.password = '';

		currentUser.passwordAgain = '';

		currentUser.newPassword = '';

		currentUser.securityQuestion = {question: '', answer: ''};

		currentUser.email = '';

		currentUser.newEmail = '';

		newLibrary.name = '';

		imageURL.data = '';
	}

}

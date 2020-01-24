import { CurrentUserService as currentUser } from './user/current-user.service';
import { NewLibraryService as newLibrary } from './library/new-library.service';


export class ClearFormDataService { // implements IDoThis

	static go(): void {
		currentUser.password = '';

		currentUser.passwordAgain = '';

		currentUser.newPassword = '';

		currentUser.securityQuestion = {question: '', answer: ''};

		currentUser.email = '';

		currentUser.newEmail = '';

		newLibrary.name = '';
	}

}

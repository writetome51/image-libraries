import { CurrentUserData as currentUser }
	from '../../data-structures/runtime-state-data/static-classes/current-user.data';
import { NewLibraryData as newLibrary }
	from '../../data-structures/runtime-state-data/new-library.data';


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

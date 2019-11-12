import { CurrentUserService as currentUser } from './user/current-user.service';


export class ClearFormDataService {

	static go(): void {

		currentUser.password = '';

		currentUser.passwordAgain = '';

		currentUser.newPassword = '';

		currentUser.securityQuestion = {question: '', answer: ''};

		currentUser.email = '';

		currentUser.newEmail = '';

	}

}

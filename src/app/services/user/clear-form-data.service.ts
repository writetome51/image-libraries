import { Injectable } from '@angular/core';
import { CurrentUserService as currentUser } from './current-user.service';


@Injectable({
	providedIn: 'root'
})
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

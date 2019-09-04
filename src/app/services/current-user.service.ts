import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class CurrentUserService {

	// If user doesn't exist yet in db, this is bound to 'password' text input.
	password = '';
	newPassword = ''; // bound to 'new password' text input

	// users create this to allow them to reset their password later
	securityQuestion = {question: '', answer: ''};

	// If user doesn't exist yet in db, this is bound to 'email' text input
	email = '';
	newEmail = ''; // bound to 'new email' text input

}

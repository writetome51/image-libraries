import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class CurrentUserService {

	// If user doesn't exist yet in db, this is bound to 'password' text input.
	password = '';

	// For when user wants to change password
	newPassword = ''; // bound to 'new password' text input

	// users create this to allow them to reset their password later
	securityQuestion = {question: '', answer: ''}; // bound to 'security question' inputs

	// If user doesn't exist yet in db, this is bound to 'email' text input
	email = '';

	// For when user wants to change email
	newEmail = ''; // bound to 'new email' text input


}

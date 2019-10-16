import { Injectable } from '@angular/core';
import { DBUser } from '../../../interfaces/db-user';


@Injectable({
	providedIn: 'root'
})
export class CurrentUserService {

	// Bound to 'password' text input.
	password = '';

	// Bound to 'password again' text input.
	passwordAgain = '';

	// For when user wants to change password
	newPassword = ''; // bound to 'new password' text input

	// users create this to allow them to reset their password later
	securityQuestion = {question: '', answer: ''}; // bound to 'security question' inputs

	// Bound to 'email' text input
	email = '';

	// For when user wants to change email
	newEmail = ''; // bound to 'new email' text input

	dbUser: DBUser; // cached value retrieved from db


	set question(value) {
		this.securityQuestion.question = value;
	}


	get question() {
		return this.securityQuestion.question;
	}


	set answer(value) {
		this.securityQuestion.answer = value;
	}


	get answer() {
		return this.securityQuestion.answer;
	}


	clearFormProperties(): void {
		this.password = '';

		this.passwordAgain = '';

		this.newPassword = '';

		this.securityQuestion = {question: '', answer: ''};

		this.email = '';

		this.newEmail = '';
	}


}

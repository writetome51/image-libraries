import { DBUser } from '../../interfaces/db-user';


export class CurrentUserService {

	// Bound to 'password' text input.
	static password = '';

	// Bound to 'password again' text input.
	static passwordAgain = '';

	// For when user wants to change password
	static newPassword = ''; // bound to 'new password' text input

	// users create this to allow them to reset their password later
	static securityQuestion = {question: '', answer: ''}; // bound to 'security question' inputs

	// Bound to 'email' text input
	static email = '';

	// For when user wants to change email
	static newEmail = ''; // bound to 'new email' text input

	static dbUser: DBUser; // cached value retrieved from db


	static set question(value) {
		this.securityQuestion.question = value;
	}


	static get question() {
		return this.securityQuestion.question;
	}


	static set answer(value) {
		this.securityQuestion.answer = value;
	}


	static get answer() {
		return this.securityQuestion.answer;
	}


	static unset() {
		this.password = '';

		this.passwordAgain = '';

		this.newPassword = '';

		this.securityQuestion = {question: '', answer: ''};

		this.email = '';

		this.newEmail = '';
	}


}

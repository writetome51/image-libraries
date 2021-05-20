export class CurrentUserFormData {

	static password = ''; // Bound to 'password' input.

	static passwordAgain = ''; // Bound to 'password again' input.

	static newPassword = ''; // Bound to 'new password' input

	static securityQuestion = {question: '', answer: ''}; // Bound to 'security question' inputs

	static email = ''; // Bound to 'email' input

	static newEmail = ''; // Bound to 'new email' input


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

}

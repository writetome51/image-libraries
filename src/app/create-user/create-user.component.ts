import { Component } from '@angular/core';
import { CurrentUserService } from '../services/current-user.service';
import { ErrorMessageService } from '../services/error-message.service';
import { NewUserSaverService } from '../services/new-user-saver.service';
import { getProperty } from '@writetome51/get-property';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

	inputs = [
		{type: 'text', userProperty: 'email', placeholder: 'Email', minLength: 6},
		{type: 'password', userProperty: 'password', placeholder: 'Password', minLength: 6},
		{type: 'password', userProperty: 'passwordAgain', placeholder: 'Password Again', minLength: 6},
		{
			type: 'text',
			userProperty: 'securityQuestion.question',
			placeholder: 'Question',
			minLength: 9,
			prompt: 'Create a security question to ask yourself if you can\'t remember your password:'
		},
		{type: 'password', userProperty: 'securityQuestion.answer', placeholder: 'Answer', minLength: 3},
	];


	constructor(
		public error: ErrorMessageService,
		private __newUserSaver: NewUserSaverService,
		private __currentUser: CurrentUserService
	) {
		this.error.message = '';
	}


	getProperty(property) {
		return getProperty(property, this.__currentUser);
	}


	create() {
		this.__newUserSaver.save();
	}


}

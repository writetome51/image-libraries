import { Component } from '@angular/core';
import { CurrentUserService } from '../services/current-user.service';
import { NewUserSaverService } from '../services/new-user-saver.service';


@Component({
	selector: 'create-user-form',
	templateUrl: './create-user-form.component.html'
})
export class CreateUserFormComponent {

	inputs = [
		{type: 'text', userProperty: 'email', placeholder: 'Email', minLength: 6},
		{type: 'password', userProperty: 'password', placeholder: 'Password', minLength: 6},
		{type: 'password', userProperty: 'passwordAgain', placeholder: 'Password Again', minLength: 6},
		{
			type: 'text',
			userProperty: 'question',
			placeholder: 'Question',
			minLength: 9,
			prompt: 'Create a security question to ask yourself if you can\'t remember your password:'
		},
		{type: 'password', userProperty: 'answer', placeholder: 'Answer', minLength: 3},
	];


	constructor(
		public currentUser: CurrentUserService, 
		private __newUserSaver: NewUserSaverService
	) {
	}


	create() {
		this.__newUserSaver.save();
	}


}

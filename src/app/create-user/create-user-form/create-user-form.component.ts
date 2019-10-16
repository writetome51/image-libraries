import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { NewUserSaverService } from '../../services/user/new-user-saver/new-user-saver.service';
import { DataOperationBegunService } from '../../services/data-operation-begun.service';


@Component({
	selector: 'create-user-form',
	templateUrl: './create-user-form.component.html'
})
export class CreateUserFormComponent implements OnInit {

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
		private __newUserSaver: NewUserSaverService,
		private __dataOperationBegun: DataOperationBegunService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async create() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__newUserSaver.save();
		this.__dataOperationBegun.waitingForResult = false;
	}


}

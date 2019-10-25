import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { NewUserProcessorService }
	from '../../services/user/new-user-processor/new-user-processor.service';
import { DataOperationBegunService } from '../../services/data-operation-begun.service';
import { UserValidationRulesService } from '../../services/user/user-validation-rules.service';


@Component({
	selector: 'create-user-form',
	templateUrl: './create-user-form.component.html'
})
export class CreateUserFormComponent implements OnInit {

	inputs = [
		{
			type: 'text', userProperty: 'email', placeholder: 'Email',
			minLength: this.__userValidationRules.emailMinLength
		},
		{
			type: 'password', userProperty: 'password', placeholder: 'Password',
			minLength: this.__userValidationRules.passwordMinLength
		},
		{
			type: 'password', userProperty: 'passwordAgain', placeholder: 'Password Again',
			minLength: this.__userValidationRules.passwordMinLength
		},
		{
			type: 'text',
			userProperty: 'question',
			placeholder: 'Question',
			minLength: this.__userValidationRules.questionMinLength,
			prompt: 'Create a security question to ask yourself if you can\'t remember your password:'
		},
		{
			type: 'password', userProperty: 'answer', placeholder: 'Answer',
			minLength: this.__userValidationRules.answerMinLength
		},
	];


	constructor(
		public currentUser: CurrentUserService,
		private __newUserProcessor: NewUserProcessorService,
		private __dataOperationBegun: DataOperationBegunService,
		private __userValidationRules: UserValidationRulesService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async create() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__newUserProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}

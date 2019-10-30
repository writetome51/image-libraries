import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { LoginProcessorService }
	from '../../services/authentication/login-processor/login-processor.service';
import { ValidatingInput } from '../../../interfaces/validating-input';
import { UserValidationRulesService } from '../../services/user/user-validation-rules.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {


	inputs: ValidatingInput[] = [
		{
			type: 'text',
			id: 'email-input',
			propertyToBind: this.currentUser.email,
			placeholder: 'Email',
			required: true,
			isValid: this.currentUser.email.length >= this._userValidationRules.emailMinLength,
			errorMessage:
				`The email must be at least ${this._userValidationRules.emailMinLength} characters`,
			error: '', // If input is invalid, this is assigned value of errorMessage.
		},
		{
			type: 'password',
			id: 'password-input',
			propertyToBind: this.currentUser.password,
			placeholder: 'Password',
			required: true,
			isValid: this.currentUser.password.length >= this._userValidationRules.passwordMinLength,
			errorMessage:
				`The password must be at least ${this._userValidationRules.passwordMinLength} characters`,
			error: '',
		}
	];


	constructor(
		public currentUser: CurrentUserService,
		public dataOperationBegun: DataOperationStatusService,
		protected _userValidationRules: UserValidationRulesService,
		private __loginProcessor: LoginProcessorService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async login() {
		this.dataOperationBegun.waitingForResult = true;
		await this.__loginProcessor.process();
		this.dataOperationBegun.waitingForResult = false;
	}


}

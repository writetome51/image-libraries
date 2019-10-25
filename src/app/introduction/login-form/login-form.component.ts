import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { LoginProcessorService } from '../../services/authentication/login-processor/login-processor.service';
import { DataOperationBegunService } from '../../services/data-operation-begun.service';
import { UserValidationRulesService } from '../../services/user/user-validation-rules.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit{

	constructor(
		public currentUser: CurrentUserService,
		public userValidationRules: UserValidationRulesService,
		public dataOperationBegun: DataOperationBegunService,
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

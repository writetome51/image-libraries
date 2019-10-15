import { Component } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { LoginProcessorService } from '../../services/authentication/login-processor.service';
import { DataOperationBegunService } from '../../services/data-operation-begun.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	constructor(
		public currentUser: CurrentUserService,
		private __loginProcessor: LoginProcessorService,
		private __dataOperationBegun: DataOperationBegunService
	) {
	}


	async login() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__loginProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}

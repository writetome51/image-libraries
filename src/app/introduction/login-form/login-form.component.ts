import { Component } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { LoginProcessorService } from '../../services/authentication/login-processor.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

	constructor(
		public currentUser: CurrentUserService,
		private __loginProcessor: LoginProcessorService
	) {
	}


	login() {
		this.__loginProcessor.process();
	}


}

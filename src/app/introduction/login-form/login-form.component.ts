import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { LoginProcessorService }
	from '../../services/authentication/login-processor/login-processor.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {


	constructor(
		public currentUser: CurrentUserService,
		private __dataOperationStatus: DataOperationStatusService,
		private __loginProcessor: LoginProcessorService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async login() {
		this.__dataOperationStatus.waitingForResult = true;
		await this.__loginProcessor.process();
		this.__dataOperationStatus.waitingForResult = false;
	}


}

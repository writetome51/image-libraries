import { Component } from '@angular/core';
import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { LoginProcessorService }
	from '../../services/authentication/login-processor/login-processor.service';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent {


	constructor(
		private __dataOperationStatus: DataOperationStatusService,
		private __loginProcessor: LoginProcessorService
	) {
	}


	async login() {
		this.__dataOperationStatus.waitingForResult = true;
		await this.__loginProcessor.process();
		this.__dataOperationStatus.waitingForResult = false;
	}


}

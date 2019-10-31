import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { DataOperationStatusService } from '../../services/data-operation-status.service';
import { LoginFormInputsService } from '../../services/login-form-inputs.service';
import { LoginProcessorService }
	from '../../services/authentication/login-processor/login-processor.service';
import { ValidatingInputsFormComponent } from '../../validating-inputs/validating-inputs-form.component';


@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html'
})
export class LoginFormComponent extends ValidatingInputsFormComponent implements OnInit {


	constructor(
		__loginFormInputs: LoginFormInputsService,
		public currentUser: CurrentUserService,
		private __dataOperationBegun: DataOperationStatusService,
		private __loginProcessor: LoginProcessorService
	) {
		super(__loginFormInputs);
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async login() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__loginProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}

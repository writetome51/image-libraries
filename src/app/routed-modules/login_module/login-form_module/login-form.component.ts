import { AppModulePathData } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { ProcessLoginByPasswordService }
	from './process-login-by-password_service/process-login-by-password.service';
import { LoginInputsService } from './login-inputs.service';


@Component({
	selector: 'login-form',
	template: `
		<div class="form-container">
			<form>
				<login-form-inputs></login-form-inputs>

				<submit-form-button [label]="'Sign In'" [validatingInputs]="inputs"
					[iDoThis]="process"
				></submit-form-button>

				<a [routerLink]="modulePath.SecurityQuestionModule">Forgot Password?</a>
			</form>
		</div>
	`
})
export class LoginFormComponent {

	modulePath = AppModulePathData;


	constructor(
		public process: ProcessLoginByPasswordService, public inputs: LoginInputsService
	) {}

}

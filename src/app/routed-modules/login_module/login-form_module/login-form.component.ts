import { AppModulePathData } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';
import { LoginInputsService } from './login-inputs.service';
import { ProcessLoginByPasswordService }
	from './process-login-by-password_service/process-login-by-password.service';


@Component({
	selector: 'login-form',
	template: `
		<div class="form-container"
			resetToDefaultOnInit [data]="[currentUserFormInputs]"
		>
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
	currentUserFormInputs = CurrentUserFormInputsData;


	constructor(
		public process: ProcessLoginByPasswordService, public inputs: LoginInputsService
	) {}

}

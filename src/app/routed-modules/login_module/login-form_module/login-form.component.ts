import { AppModulePathData } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { CurrentUserFormInputsData }
	from '@runtime-state-data/static-classes/current-user-form-inputs.data';


@Component({
	selector: 'login-form',
	template: `
		<div class="form-container">
			<form>
				<login-form-inputs
					resetToDefaultOnInit [resettables]="[currentUserFormInputs]"
				></login-form-inputs>

				<submit-login-form-button></submit-login-form-button>

				<a [routerLink]="modulePath.SecurityQuestionModule">Forgot Password?</a>
			</form>
		</div>
	`
})
export class LoginFormComponent {

	modulePath = AppModulePathData;
	currentUserFormInputs = CurrentUserFormInputsData;

}

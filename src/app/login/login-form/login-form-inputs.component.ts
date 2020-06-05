import { Component } from '@angular/core';
import { LoginEmailPasswordInputsService }
	from '../../services/validating-inputs/current-user-inputs/login-email-password-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'login-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class LoginFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__emailPasswordInputs: LoginEmailPasswordInputsService) {
		super(__emailPasswordInputs);
	}

}

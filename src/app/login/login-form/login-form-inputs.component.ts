import { Component } from '@angular/core';
import { LoginFormInputsService }
	from './login-form-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'login-form-inputs',
	template: `<validating-inputs [data]="inputs"></validating-inputs>`
})
export class LoginFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__loginFormInputs: LoginFormInputsService) {
		super(__loginFormInputs);
	}

}

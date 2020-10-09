import { Component } from '@angular/core';
import { LoginFormInputsService } from './login-form-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'login-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class LoginFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__loginFormInputs: LoginFormInputsService) {
		super(__loginFormInputs);
	}

}

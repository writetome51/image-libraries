import { Component } from '@angular/core';
import { LoginInputsService } from './login-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'login-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class LoginFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__validatingInputs: LoginInputsService) {
		super(__validatingInputs);
	}

}

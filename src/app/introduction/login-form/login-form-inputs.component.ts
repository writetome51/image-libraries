import { Component } from '@angular/core';
import { LoginFormInputsService } from '../../services/login-form-inputs.service';
import { ValidatingFormInputsComponent } from '../../validating-inputs/validating-form-inputs.component';


@Component({
	selector: 'login-form-inputs',
	template: `
		<validating-inputs [inputs]="inputs"></validating-inputs>
	`
})
export class LoginFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__loginFormInputs: LoginFormInputsService) {
		super(__loginFormInputs);
	}

}

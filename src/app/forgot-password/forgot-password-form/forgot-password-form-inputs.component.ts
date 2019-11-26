import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { ForgotPasswordInputsService }
	from '../../services/validating-inputs/forgot-password-inputs.service';


@Component({
	selector: 'forgot-password-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class ForgotPasswordFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__forgotPasswordFormInputs: ForgotPasswordInputsService) {
		super(__forgotPasswordFormInputs);
	}

}

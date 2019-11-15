import { Component } from '@angular/core';
import { EmailPasswordInputsService }
	from '../services/validating-inputs/email-password-inputs.service';
import { ValidatingFormInputsComponent }
	from '../validating-inputs/validating-form-inputs.component';

// Use in any form that only requires inputs 'email' and 'password'.

@Component({
	selector: 'email-password-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class EmailPasswordFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__emailPasswordInputs: EmailPasswordInputsService) {
		super(__emailPasswordInputs);
	}

}

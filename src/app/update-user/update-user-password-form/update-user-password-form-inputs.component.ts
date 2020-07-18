import { Component } from '@angular/core';
import { UpdatePasswordInputsService }
	from './update-password-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-user-password-form-inputs',
	template: `<validating-inputs [data]="inputs"></validating-inputs>`
})
export class UpdateUserPasswordFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__updatePasswordFormInputs: UpdatePasswordInputsService) {
		super(__updatePasswordFormInputs);
	}

}

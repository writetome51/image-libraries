import { Component } from '@angular/core';
import { UpdatePasswordFormInputsService }
	from '../../services/validating-inputs/current-user-inputs/update-password-form-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-user-password-form-inputs',
	template: `
		<validating-inputs [data]="inputs"></validating-inputs>`
})
export class UpdateUserPasswordFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__updatePasswordFormInputs: UpdatePasswordFormInputsService) {
		super(__updatePasswordFormInputs);
	}

}

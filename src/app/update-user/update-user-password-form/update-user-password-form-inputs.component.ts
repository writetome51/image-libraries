import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '../../validating-inputs/validating-form-inputs.component';
import { UpdatePasswordFormInputsService } from '../../services/update-password-form-inputs.service';


@Component({
	selector: 'update-user-password-form-inputs',
	template: `
		<validating-inputs [inputs]="inputs"></validating-inputs>
	`
})
export class UpdateUserPasswordFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__updatePasswordFormInputs: UpdatePasswordFormInputsService) {
		super(__updatePasswordFormInputs);
	}

}

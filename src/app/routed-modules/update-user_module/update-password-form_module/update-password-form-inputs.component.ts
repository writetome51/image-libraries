import { Component } from '@angular/core';
import { ValidatingUpdatePasswordInputsService }
	from './validating-update-password-inputs_service/validating-update-password-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-password-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class UpdatePasswordFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__validatingInputs: ValidatingUpdatePasswordInputsService) {
		super(__validatingInputs);
	}

}

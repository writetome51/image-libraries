import { Component } from '@angular/core';
import { UpdatePasswordInputsService }
	from './update-password-inputs_service/update-password-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-password-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class UpdatePasswordFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__validatingInputs: UpdatePasswordInputsService) {
		super(__validatingInputs);
	}

}

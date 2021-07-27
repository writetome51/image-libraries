import { Component } from '@angular/core';
import { ValidatingUpdateEmailInputsService }
	from './validating-update-email-inputs_service/validating-update-email-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-email-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class UpdateEmailFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__validatingInputs: ValidatingUpdateEmailInputsService) {
		super(__validatingInputs);
	}

}

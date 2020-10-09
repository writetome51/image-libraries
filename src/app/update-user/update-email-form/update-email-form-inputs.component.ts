import { Component } from '@angular/core';
import { UpdateEmailInputsService } from './update-email-inputs/update-email-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-email-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class UpdateEmailFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__updateEmailInputs: UpdateEmailInputsService) {
		super(__updateEmailInputs);
	}

}

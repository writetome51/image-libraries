import { Component } from '@angular/core';
import { UpdateEmailInputsService } from './update-email-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-user-email-form-inputs',
	template: `<validating-inputs [data]="inputs"></validating-inputs>`
})
export class UpdateUserEmailFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__updateEmailInputs: UpdateEmailInputsService) {
		super(__updateEmailInputs);
	}

}

import { Component } from '@angular/core';
import { UpdateEmailFormInputsService }
	from '../../services/validating-inputs/current-user-inputs/update-email-form-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-user-email-form-inputs',
	template: `
		<validating-inputs [data]="inputs"></validating-inputs>`
})
export class UpdateUserEmailFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__updateEmailFormInputs: UpdateEmailFormInputsService) {
		super(__updateEmailFormInputs);
	}

}

import { Component } from '@angular/core';
import { UpdateEmailFormInputsService }
	from '../../services/validating-inputs/update-email-form-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'update-user-email-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class UpdateUserEmailFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__updateEmailFormInputs: UpdateEmailFormInputsService) {
		super(__updateEmailFormInputs);
	}

}

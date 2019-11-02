import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '../../validating-inputs/validating-form-inputs.component';
import { UpdateEmailFormInputsService } from '../../services/validating-inputs/update-email-form-inputs.service';


@Component({
	selector: 'update-user-email-form-inputs',
	template: `
		<validating-inputs [inputs]="inputs"></validating-inputs>
	`
})
export class UpdateUserEmailFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__updateEmailFormInputs: UpdateEmailFormInputsService) {
		super(__updateEmailFormInputs);
	}

}

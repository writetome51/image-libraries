import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { DeleteUserEmailPasswordInputsService }
	from '../../services/validating-inputs/current-user-inputs/delete-user-email-password-inputs.service';


@Component({
	selector: 'delete-user-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class DeleteUserFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__emailPasswordInputs: DeleteUserEmailPasswordInputsService) {
		super(__emailPasswordInputs);
	}

}

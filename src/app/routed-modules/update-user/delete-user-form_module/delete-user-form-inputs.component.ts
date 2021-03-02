import { Component } from '@angular/core';
import { DeleteUserInputsService } from './delete-user-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'delete-user-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class DeleteUserFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__validatingInputs: DeleteUserInputsService) {
		super(__validatingInputs);
	}

}

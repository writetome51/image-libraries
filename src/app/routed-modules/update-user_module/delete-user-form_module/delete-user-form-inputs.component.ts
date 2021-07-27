import { Component } from '@angular/core';
import { ValidatingDeleteUserInputsService } from './validating-delete-user-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'delete-user-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class DeleteUserFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__validatingInputs: ValidatingDeleteUserInputsService) {
		super(__validatingInputs);
	}

}

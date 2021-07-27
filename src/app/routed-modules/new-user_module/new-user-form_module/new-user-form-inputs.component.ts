import { Component } from '@angular/core';
import { ValidatingNewUserInputsService } from './validating-new-user-inputs_service/validating-new-user-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'new-user-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class NewUserFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__validatingInputs: ValidatingNewUserInputsService) {
		super(__validatingInputs);
	}

}

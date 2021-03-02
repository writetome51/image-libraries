import { Component } from '@angular/core';
import { NewUserInputsService } from './new-user-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'new-user-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class NewUserFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__validatingInputs: NewUserInputsService) {
		super(__validatingInputs);
	}

}

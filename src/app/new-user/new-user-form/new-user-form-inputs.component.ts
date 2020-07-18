import { Component } from '@angular/core';
import { NewUserInputsService }
	from './new-user-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'new-user-form-inputs',
	template: `<validating-inputs [data]="inputs"></validating-inputs>`
})
export class NewUserFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__newUserInputs: NewUserInputsService) {
		super(__newUserInputs);
	}

}

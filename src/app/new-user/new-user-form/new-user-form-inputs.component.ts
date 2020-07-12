import { Component } from '@angular/core';
import { NewUserFormInputsService }
	from '../../services/validating-inputs/current-user-inputs/new-user-form-inputs.service';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'new-user-form-inputs',
	template: `
		<validating-inputs [data]="inputs"></validating-inputs>`
})
export class NewUserFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__newUserFormInputs: NewUserFormInputsService) {
		super(__newUserFormInputs);
	}

}

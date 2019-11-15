import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '../../validating-inputs/validating-form-inputs.component';
import { NewUserFormInputsService }
	from '../../services/validating-inputs/new-user-form-inputs.service';


@Component({
	selector: 'new-user-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class NewUserFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__newUserFormInputs: NewUserFormInputsService) {
		super(__newUserFormInputs);
	}

}

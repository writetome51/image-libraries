import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { NewLibraryInputsService } from '../../services/validating-inputs/new-library-inputs.service';


@Component({
	selector: 'new-library-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class NewLibraryFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__newLibraryInputs: NewLibraryInputsService) {
		super(__newLibraryInputs);
	}

}

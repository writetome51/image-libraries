import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { NewLibraryInputsService } from './new-library-inputs.service';


@Component({
	selector: 'new-library-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class NewLibraryFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__newLibraryInputs: NewLibraryInputsService) {
		super(__newLibraryInputs);
	}

}

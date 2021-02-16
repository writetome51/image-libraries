import { Component } from '@angular/core';
import { ValidatingFormInputComponent } from '@writetome51/validating-inputs';
import { LibraryNameInputService } from './library-name-input.service';


@Component({
	selector: 'new-library-form-input',
	template: `<app-validating-form-input [data]="input"></app-validating-form-input>`
})
export class NewLibraryFormInputComponent extends ValidatingFormInputComponent {

	constructor(__libraryNameInput: LibraryNameInputService) {
		super(__libraryNameInput);
	}

}

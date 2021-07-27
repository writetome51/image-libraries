import { Component } from '@angular/core';
import { ValidatingFormInputComponent, } from '@writetome51/validating-inputs';
import { ValidatingSearchInputService } from '@validating-input/validating-search-input.service';


@Component({
	selector: 'search-form-input',
	template: `<app-validating-form-input [data]="input"></app-validating-form-input>`
})
export class SearchFormInputComponent extends ValidatingFormInputComponent {

	constructor(__validatingInput: ValidatingSearchInputService) {
		super(__validatingInput);
	}

}

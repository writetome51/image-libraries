import { Component } from '@angular/core';
import { ValidatingFormInputComponent, } from '@writetome51/validating-inputs';
import { SearchInputService } from './search-input.service';


@Component({
	selector: 'search-form-input',
	template: `<app-validating-form-input [data]="input"></app-validating-form-input>`
})
export class SearchFormInputComponent extends ValidatingFormInputComponent {

	constructor(__searchInput: SearchInputService) {
		super(__searchInput);
	}

}

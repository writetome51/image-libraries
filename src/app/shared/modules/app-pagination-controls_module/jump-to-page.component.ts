import { Component, Input } from '@angular/core';
import { ValidatingInput } from '@writetome51/validating-inputs';


@Component({
	selector: 'jump-to-page',
	template: `
		<app-validating-form-input [data]="pageNumberInput"></app-validating-form-input>
		<a [routerLink]="['/' + routeBeforePage, pageNumber]">Go</a>
	`
})
export class JumpToPageComponent {

	@Input() pageNumberInput: ValidatingInput;
	@Input() routeBeforePage: string;


	get pageNumber() {
		return this.pageNumberInput.objectToBind[this.pageNumberInput.propertyToBind];
	}

}
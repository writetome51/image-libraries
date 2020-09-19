import { Component, Input } from '@angular/core';
import { ValidatingInput } from '@writetome51/validating-inputs';


@Component({
	selector: 'jump-to-page-input',
	template: `
		<validating-input [input]="data"></validating-input>
		<a [routerLink]="['/' + routeBeforePageNumber, pageNumber]">Go</a>
	`
})
export class JumpToPageInputComponent {

	@Input() data: ValidatingInput;
	@Input() routeBeforePageNumber: string;


	get pageNumber() {
		return this.data.objectToBind[this.data.propertyToBind];
	}

}

import { Component, Input } from '@angular/core';
import { ValidatingInput } from '@writetome51/validating-inputs';


@Component({
	selector: 'jump-to-page-input',
	template: `
		<validating-input [input]="data"></validating-input>
		<button>Go</button>
	`
})
export class JumpToPageInputComponent {

	@Input() data: ValidatingInput;

}

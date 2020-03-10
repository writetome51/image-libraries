import { Component, Input } from '@angular/core';
import { ValidatingInput } from '@writetome51/validating-inputs';


@Component({
	selector: 'jump-to-page-number-input',
	template: `<validating-input [input]="data"></validating-input>`,
	styleUrls: ['./jump-to-page-number-input.component.css']
})
export class JumpToPageNumberInputComponent {

	@Input() data: ValidatingInput;

}

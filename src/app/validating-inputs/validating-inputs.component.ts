import { Component, Input } from '@angular/core';
import { ValidatingInput } from '@writetome51/validating-inputs';


@Component({
	selector: 'validating-inputs',
	template: `<validating-input *ngFor="let input of inputs" [input]="input"></validating-input>`
})

// To be used with ValidatingFormInputsComponent from '@writetome51/validating-inputs'

export class ValidatingInputsComponent {

	@Input() inputs: ValidatingInput[];

}

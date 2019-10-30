import { Component, Input } from '@angular/core';
import { ValidatingInput } from '../../interfaces/validating-input';
import { not } from '@writetome51/not';


@Component({
	selector: 'validating-input',
	templateUrl: './validating-input.component.html'
})
export class ValidatingInputComponent {


	@Input() input: ValidatingInput;
	error: string;


	constructor() {
	}


	validate(): void {
		if (not(this.input.isValid)) {
			this.error = this.input.errorMessage;
		}
	}


}

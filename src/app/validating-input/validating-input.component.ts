import { Component, Input, OnInit } from '@angular/core';
import { ValidatingInput } from '../../interfaces/validating-input';
import { not } from '@writetome51/not';


@Component({
	selector: 'validating-input',
	templateUrl: './validating-input.component.html'
})
export class ValidatingInputComponent implements OnInit {


	@Input() input: ValidatingInput;


	constructor() {
	}


	ngOnInit(): void {
		this.input.error = '';
	}


	validate(): void {
		if (not(this.input.isValid)) {
			this.input.error = this.input.errorMessage;
		}
	}


}

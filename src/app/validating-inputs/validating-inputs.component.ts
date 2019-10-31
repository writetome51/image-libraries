import { Component, Input, OnInit } from '@angular/core';
import { not } from '@writetome51/not';
import { ValidatingInput } from './validating-input';


@Component({
	selector: 'validating-inputs',
	templateUrl: './validating-inputs.component.html'
})
export class ValidatingInputsComponent implements OnInit {


	@Input() inputs: ValidatingInput[];


	ngOnInit(): void {
		this.inputs.forEach((input) => input.error = '');
	}


	validate(index): void {
		if (not(this.inputs[index].isValid())) {
			this.inputs[index].error = this.inputs[index].errorMessage;
		}
		else this.inputs[index].error = '';
	}


}

import { Component, Input, OnInit } from '@angular/core';
import { InputValidatorService, ValidatingInput } from '@writetome51/validating-inputs';


@Component({
	selector: 'validating-inputs',
	templateUrl: './validating-inputs.component.html'
})

// To be used with ValidatingFormInputsComponent from '@writetome51/validating-inputs'

export class ValidatingInputsComponent implements OnInit {

	@Input() inputs: ValidatingInput[];


	ngOnInit(): void {
		this.inputs.forEach((input) => input.__error = '');
	}


	validate(index): void {
		InputValidatorService.validate(this.inputs[index]);
	}

}

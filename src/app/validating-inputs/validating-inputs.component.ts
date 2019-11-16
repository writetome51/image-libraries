import { Component, Input, OnInit } from '@angular/core';
import { ValidatingInput } from './validating-input';
import { InputValidatorService } from './input-validator.service';


@Component({
	selector: 'validating-inputs',
	templateUrl: './validating-inputs.component.html'
})

// To be used with ValidatingFormInputsComponent

export class ValidatingInputsComponent implements OnInit {

	@Input() inputs: ValidatingInput[];


	ngOnInit(): void {
		this.inputs.forEach((input) => input.error = '');
	}


	validate(index): void {
		InputValidatorService.validate(this.inputs[index]);
	}

}

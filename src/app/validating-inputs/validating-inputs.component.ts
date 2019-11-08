import { Component, Input, OnInit } from '@angular/core';
import { ValidatingInput } from './validating-input';
import { InputsValidatorService } from './inputs-validator.service';


@Component({
	selector: 'validating-inputs',
	templateUrl: './validating-inputs.component.html'
})

// To be used in combination with ValidatingFormInputsComponent

export class ValidatingInputsComponent implements OnInit {

	@Input() inputs: ValidatingInput[];


	ngOnInit(): void {
		this.inputs.forEach((input) => input.error = '');
	}


	validate(index): void {
		InputsValidatorService.validate(this.inputs[index]);
	}

}

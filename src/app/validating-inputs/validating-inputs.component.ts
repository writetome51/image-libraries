import { Component, Input, OnInit } from '@angular/core';
import { ValidatingInput } from './validating-input';
import { InputsValidatorService } from './inputs-validator.service';


@Component({
	selector: 'validating-inputs',
	templateUrl: './validating-inputs.component.html'
})

// To be used in combination with ValidatingFormInputsComponent

export class ValidatingInputsComponent implements OnInit {

	private __inputs;


	@Input() set inputs(value: ValidatingInput[]) {
		this.__inputsValidator.inputs = value;
		this.__inputs = value;
	}


	get inputs() {
		return this.__inputs;
	}


	constructor(private __inputsValidator: InputsValidatorService) {
	}


	ngOnInit(): void {
		this.__inputs.forEach((input) => input.error = '');
	}


	validate(index): void {
		this.__inputsValidator.validate(index);
	}


}

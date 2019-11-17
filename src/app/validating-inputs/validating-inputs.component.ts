import { Component, Input, OnInit } from '@angular/core';
import { ValidatingInput } from './framework-independent/validating-input';
import { InputValidatorService } from './framework-independent/input-validator.service';


@Component({
	selector: 'validating-inputs',
	templateUrl: './validating-inputs.component.html'
})

// To be used with ValidatingFormInputsComponent

export class ValidatingInputsComponent implements OnInit {

	@Input() inputs: ValidatingInput[];


	ngOnInit(): void {
		this.inputs.forEach((input) => input.__error = '');
	}


	validate(index): void {
		InputValidatorService.validate(this.inputs[index]);
	}

}

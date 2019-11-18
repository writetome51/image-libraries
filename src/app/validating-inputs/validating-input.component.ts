import { Component, Input, OnInit } from '@angular/core';
import { InputValidatorService, ValidatingInput } from '@writetome51/validating-inputs';


@Component({
	selector: 'validating-input',
	templateUrl: './validating-input.component.html'
})

// Can be used with ValidatingFormInputComponent from '@writetome51/validating-inputs'

export class ValidatingInputComponent implements OnInit {

	@Input() input: ValidatingInput;


	ngOnInit(): void {
		this.input.__error = '';
	}


	validate(): void {
		InputValidatorService.validate(this.input);
	}

}

import { Component, Input, OnInit } from '@angular/core';
import { InputValidatorService as inputValidator, ValidatingInput }
	from '@writetome51/validating-inputs';


@Component({
	selector: 'validating-input',
	templateUrl: './validating-input.component.html',
	styleUrls: ['./validating-input.component.css']
})

// Can be used with ValidatingFormInputComponent from '@writetome51/validating-inputs'
// Also, create equivalent UI component of this for ReactJS.

export class ValidatingInputComponent implements OnInit {

	@Input() input: ValidatingInput;


	ngOnInit(): void {
		this.input.__error = '';
	}


	validate(): void {
		inputValidator.validate(this.input);
	}

}

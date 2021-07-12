import { Component, OnInit } from '@angular/core';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';
import { InputValidatorService as inputValidator, ValidatingInput }
	from '@writetome51/validating-inputs';


@Component({
	selector: 'app-validating-form-input',
	templateUrl: './app-validating-form-input.component.html'
})

// Can be used with ValidatingFormInputComponent from '@writetome51/validating-inputs'
// Also, create equivalent UI component of this for ReactJS.

export class AppValidatingFormInputComponent extends HasDataInputDirective<ValidatingInput>
	implements OnInit {

	ngOnInit(): void {
		this.data.triggeredError = '';
	}


	validate(): void {
		inputValidator.validate(this.data);
	}

}

import { Component, OnInit } from '@angular/core';
import { InputValidatorService as inputValidator, ValidatingInput }
	from '@writetome51/validating-inputs';
import { HasDataInputDirective } from '@app/shared/abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'app-validating-form-input',
	templateUrl: './app-validating-form-input.component.html',
	styleUrls: ['./app-validating-form-input.component.css']
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

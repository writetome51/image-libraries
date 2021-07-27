import { Component } from '@angular/core';
import { ValidatingFormInputComponent } from '@writetome51/validating-inputs';
import { ValidatingEmailToGetSecurityQuestionInputService }
	from './validating-email-to-get-security-question-input.service';


@Component({
	selector: 'get-security-question-form-input',
	template: `<app-validating-form-input [data]="input"></app-validating-form-input>`
})
export class GetSecurityQuestionFormInputComponent extends ValidatingFormInputComponent {

	constructor(__validatingInput: ValidatingEmailToGetSecurityQuestionInputService) {
		super(__validatingInput);
	}

}

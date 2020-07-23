import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { EmailToGetSecurityQuestionInputService }
	from './email-to-get-security-question-input.service';


@Component({
	selector: 'get-security-question-form-inputs',
	template: `<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class GetSecurityQuestionFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__getSecurityQuestionInputs: EmailToGetSecurityQuestionInputService) {
		super(__getSecurityQuestionInputs);
	}

}

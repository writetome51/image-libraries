import { Component } from '@angular/core';
import { ValidatingFormInputComponent, } from '@writetome51/validating-inputs';
import { ValidatingSecurityAnswerLoginInputService } from './validating-security-answer-login-input.service';


@Component({
	selector: 'answer-security-question-form-input',
	template: `<app-validating-form-input [data]="input"></app-validating-form-input>`
})
export class AnswerSecurityQuestionFormInputComponent extends ValidatingFormInputComponent {

	constructor(__validatingInput: ValidatingSecurityAnswerLoginInputService) {
		super(__validatingInput);
	}

}

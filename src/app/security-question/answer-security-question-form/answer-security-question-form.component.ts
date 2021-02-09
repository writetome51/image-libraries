import { Component } from '@angular/core';
import { LoginBySecurityQuestionProcessorService }
	from './login-by-security-question-processor/login-by-security-question-processor.service';


@Component({
	selector: 'answer-security-question-form',
	template: `
		<answer-security-question-form-input></answer-security-question-form-input>
		<submit-form-button [label]="'Submit Answer'" [processor]="processor"></submit-form-button>
	`
})
export class AnswerSecurityQuestionFormComponent {

	constructor(public processor: LoginBySecurityQuestionProcessorService) {
	}

}

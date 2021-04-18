import { Component } from '@angular/core';
import { ProcessLoginBySecurityQuestionService }
	from './process-login-by-security-question_service/process-login-by-security-question.service';


@Component({
	selector: 'answer-security-question-form',
	template: `
		<answer-security-question-form-input></answer-security-question-form-input>
		<submit-form-button [label]="'Submit Answer'" [iDoThis]="process"></submit-form-button>
	`
})
export class AnswerSecurityQuestionFormComponent {

	constructor(public process: ProcessLoginBySecurityQuestionService) {}

}

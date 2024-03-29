import { Component } from '@angular/core';
import { ProcessGetSecurityQuestionService }
	from './process-get-security-question_service/process-get-security-question.service';
import { ValidatingEmailToGetSecurityQuestionInputService }
	from './validating-email-to-get-security-question-input.service';


@Component({
	selector: 'get-security-question-form',
	template: `
		<get-security-question-form-input></get-security-question-form-input>
		<submit-form-button [label]="'Get Question'" [validatingInputs]="input"
			[iDoThis]="process"
		></submit-form-button>
	`
})
export class GetSecurityQuestionFormComponent {

	constructor(
		public process: ProcessGetSecurityQuestionService,
		public input: ValidatingEmailToGetSecurityQuestionInputService
	) {}

}

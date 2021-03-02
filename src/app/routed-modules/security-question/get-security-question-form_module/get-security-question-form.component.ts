import { Component } from '@angular/core';
import { ProcessGetSecurityQuestionService }
	from './get-security-question-processor_service/process-get-security-question.service';


@Component({
	selector: 'get-security-question-form',
	template: `
		<get-security-question-form-input></get-security-question-form-input>
		<submit-form-button [label]="'Get Question'" [process]="processor"></submit-form-button>
	`
})
export class GetSecurityQuestionFormComponent {

	constructor(public processor: ProcessGetSecurityQuestionService) {
	}

}

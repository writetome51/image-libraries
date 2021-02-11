import { Component } from '@angular/core';
import { GetSecurityQuestionProcessorService }
	from './get-security-question-processor/get-security-question-processor.service';


@Component({
	selector: 'get-security-question-form',
	template: `
		<get-security-question-form-input></get-security-question-form-input>
		<submit-form-button [label]="'Get Question'" [processor]="processor"></submit-form-button>
	`
})
export class GetSecurityQuestionFormComponent {

	constructor(public processor: GetSecurityQuestionProcessorService) {
	}

}

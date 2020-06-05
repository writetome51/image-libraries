import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../start-data-process.component';
import { GetSecurityQuestionProcessorService }
	from '../../services/data-transport-processor/authentication/get-security-question-processor.service';


@Component({
	selector: 'get-question-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="start">
			Get Security Question
		</processing-button>
	`
})
export class GetQuestionButtonComponent extends StartDataProcessComponent {

	constructor(__getSecurityQuestionProcessor: GetSecurityQuestionProcessorService) {
		super(__getSecurityQuestionProcessor);
	}

}

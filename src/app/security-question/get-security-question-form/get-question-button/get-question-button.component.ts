import { Component } from '@angular/core';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';
import { GetSecurityQuestionProcessorService }
	from './get-security-question-processor/get-security-question-processor.service';


@Component({
	selector: 'get-question-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Get Security Question
		</start-data-process-button>
	`
})
export class GetQuestionButtonComponent extends StartDataProcessContainerComponent {

	constructor(__getSecurityQuestionProcessor: GetSecurityQuestionProcessorService) {
		super(__getSecurityQuestionProcessor);
	}

}

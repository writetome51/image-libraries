import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../../shared/abstract-components/start-data-process.component';
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
export class GetQuestionButtonComponent extends StartDataProcessComponent {

	constructor(__getSecurityQuestionProcessor: GetSecurityQuestionProcessorService) {
		super(__getSecurityQuestionProcessor);
	}

}

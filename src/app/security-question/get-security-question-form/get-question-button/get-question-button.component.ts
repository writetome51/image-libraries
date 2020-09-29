import { Component } from '@angular/core';
import { GetSecurityQuestionProcessorService }
	from './get-security-question-processor/get-security-question-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'get-question-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this" [pixelWidth]="110">
			Get Question
		</start-data-process-button>
	`
})
export class GetQuestionButtonComponent extends StartDataProcessContainerComponent {

	constructor(__getSecurityQuestionProcessor: GetSecurityQuestionProcessorService) {
		super(__getSecurityQuestionProcessor);
	}

}

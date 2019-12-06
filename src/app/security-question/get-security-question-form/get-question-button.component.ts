import { Component } from '@angular/core';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';
import { GetSecurityQuestionProcessorService }
	from '../../services/data-operation-processor/get-security-question-processor.service';
import { QuestionStatusService as questionStatus } from '../question-status.service';


@Component({
	selector: 'get-question-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Get Security Question
		</processing-button>
	`
})
export class GetQuestionButtonComponent extends DataOperationProcessorComponent {

	constructor(__getSecurityQuestionProcessor: GetSecurityQuestionProcessorService) {
		super(__getSecurityQuestionProcessor);
	}


	async process() {
		await super.process();
		questionStatus.received = true;
	}

}

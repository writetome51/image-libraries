import { Component } from '@angular/core';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';
import { GetSecurityQuestionProcessorService }
	from '../../services/data-operation-processor/get-security-question-processor.service';
import { QuestionStatusService as questionStatus } from '../question-status.service';


@Component({
	selector: 'get-security-question-form',
	templateUrl: './get-security-question-form.component.html'
})
export class GetSecurityQuestionFormComponent extends DataOperationProcessorComponent {

	constructor(__getSecurityQuestionProcessor: GetSecurityQuestionProcessorService) {
		super(__getSecurityQuestionProcessor);
	}


	async process() {
		await super.process();
		questionStatus.received = true;
	}

}

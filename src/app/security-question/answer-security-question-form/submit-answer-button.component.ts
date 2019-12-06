import { Component } from '@angular/core';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';
import { LoginBySecurityQuestionProcessorService }
	from '../../services/data-operation-processor/login-by-security-question-processor.service';
import { QuestionStatusService as questionStatus } from '../question-status.service';


@Component({
	selector: 'submit-answer-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Submit Answer
		</processing-button>
	`
})
export class SubmitAnswerButtonComponent extends DataOperationProcessorComponent {

	constructor(__loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
		super(__loginBySecurityQuestionProcessor);
	}


	async process() {
		await super.process();
		questionStatus.received = false;
	}

}

import { Component } from '@angular/core';
import { DataProcessorComponent } from '../../data-processor.component';
import { LoginBySecurityQuestionProcessorService }
	from '../../services/data-transport-processor/login-by-security-question-processor.service';
import { QuestionStatusService as questionStatus } from '../question-status.service';


@Component({
	selector: 'submit-answer-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Submit Answer
		</processing-button>
	`
})
export class SubmitAnswerButtonComponent extends DataProcessorComponent {

	constructor(__loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
		super(__loginBySecurityQuestionProcessor);
	}


	async process() {
		await super.process();
		questionStatus.received = false;
	}

}

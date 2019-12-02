import { Component } from '@angular/core';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';
import { LoginBySecurityQuestionProcessorService }
	from '../../services/data-operation-processor/login-by-security-question-processor.service';
import { QuestionStatusService as questionStatus } from '../question-status.service';


@Component({
	selector: 'answer-security-question-form',
	templateUrl: './answer-security-question-form.component.html'
})
export class AnswerSecurityQuestionFormComponent extends DataOperationProcessorComponent {

	constructor(__loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
		super(__loginBySecurityQuestionProcessor);
	}


	async process() {
		await super.process();
		questionStatus.received = false;
	}

}

import { Component } from '@angular/core';
import { PerformDataOperationService as performDataOperation }
	from '../../services/perform-data-operation.service';
import { LoginBySecurityQuestionProcessorService }
	from '../../services/data-operation-processor/login-by-security-question-processor.service';
import { QuestionStatusService as questionStatus } from '../question-status.service';


@Component({
	selector: 'answer-security-question-form',
	templateUrl: './answer-security-question-form.component.html'
})
export class AnswerSecurityQuestionFormComponent {

	constructor(
		private __loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService
	) {
	}


	async submitAnswer() {
		await performDataOperation.go(this.__loginBySecurityQuestionProcessor);
		questionStatus.received = false;
	}

}

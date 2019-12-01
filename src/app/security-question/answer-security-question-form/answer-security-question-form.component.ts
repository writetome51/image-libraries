import { Component } from '@angular/core';
import { PerformDataOperationService as performDataOperation }
	from '../../services/perform-data-operation.service';
import { LoginBySecurityQuestionProcessorService }
	from '../../services/data-operation-processor/login-by-security-question-processor.service';


@Component({
	selector: 'answer-security-question-form',
	templateUrl: './answer-security-question-form.component.html',
	styleUrls: ['./answer-security-question-form.component.sass']
})
export class AnswerSecurityQuestionFormComponent {

	constructor(private __loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
	}


	async submitAnswer() {
		await performDataOperation.go(this.__loginBySecurityQuestionProcessor);
	}

}

import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../start-data-process.component';
import { LoginBySecurityQuestionProcessorService } from
		'../../services/data-transport-processor/authentication/login-by-security-question-processor.service';
import { SecurityQuestionStatusData as questionStatus }
	from '../../../data-structures/runtime-state-data/security-question-status.data';


@Component({
	selector: 'submit-answer-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="start">
			Submit Answer
		</processing-button>
	`
})
export class SubmitAnswerButtonComponent extends StartDataProcessComponent {

	constructor(__loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
		super(__loginBySecurityQuestionProcessor);
	}


	async start() {
		await super.start();
		questionStatus.received = false;
	}

}

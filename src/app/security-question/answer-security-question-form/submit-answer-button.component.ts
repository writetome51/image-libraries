import { Component } from '@angular/core';
import { DataProcessorComponent } from '../../data-processor.component';
import { LoginBySecurityQuestionProcessorService }
	from '../../services/data-transport-processor/login-by-security-question-processor.service';
import { SecurityQuestionStatusData as questionStatus }
	from '../../../data-structures/runtime-state-data/security-question-status.data';


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

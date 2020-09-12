import { Component } from '@angular/core';
import { StartDataProcessContainerComponent } from '@abstract-components/start-data-process-container.component';
import { LoginBySecurityQuestionProcessorService }
	from './login-by-security-question-processor.service';


@Component({
	selector: 'submit-answer-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Submit Answer
		</start-data-process-button>
	`
})
export class SubmitAnswerButtonComponent extends StartDataProcessContainerComponent {

	constructor(__loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
		super(__loginBySecurityQuestionProcessor);
	}

}

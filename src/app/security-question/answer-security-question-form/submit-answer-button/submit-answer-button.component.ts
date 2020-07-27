import { Component } from '@angular/core';
import { StartDataProcessComponent } from '@abstract-components/start-data-process.component';
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
export class SubmitAnswerButtonComponent extends StartDataProcessComponent {

	constructor(__loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
		super(__loginBySecurityQuestionProcessor);
	}

}

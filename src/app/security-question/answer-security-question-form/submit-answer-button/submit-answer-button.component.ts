import { Component } from '@angular/core';
import { LoginBySecurityQuestionProcessorService }
	from './login-by-security-question-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'submit-answer-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this" [pixelWidth]="122">
			Submit Answer
		</start-data-process-button>
	`
})
export class SubmitAnswerButtonComponent extends StartDataProcessContainerComponent {

	constructor(__loginBySecurityQuestionProcessor: LoginBySecurityQuestionProcessorService) {
		super(__loginBySecurityQuestionProcessor);
	}

}

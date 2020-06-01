import { Component } from '@angular/core';
import { DataProcessorComponent } from '../../data-processor.component';
import { GetSecurityQuestionProcessorService }
	from '../../services/data-transport-processor/authentication/get-security-question-processor.service';


@Component({
	selector: 'get-question-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Get Security Question
		</processing-button>
	`
})
export class GetQuestionButtonComponent extends DataProcessorComponent {

	constructor(__getSecurityQuestionProcessor: GetSecurityQuestionProcessorService) {
		super(__getSecurityQuestionProcessor);
	}

}

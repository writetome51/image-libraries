import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { AnswerSecurityQuestionInputsService }
	from './answer-security-question-inputs.service';


@Component({
	selector: 'answer-security-question-form-inputs',
	template: `
		<validating-inputs [data]="inputs"></validating-inputs>`
})
export class AnswerSecurityQuestionFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__answerSecurityQuestionInputs: AnswerSecurityQuestionInputsService) {
		super(__answerSecurityQuestionInputs);
	}

}

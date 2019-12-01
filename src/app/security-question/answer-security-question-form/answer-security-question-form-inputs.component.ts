import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';


@Component({
	selector: 'answer-security-question-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class AnswerSecurityQuestionFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__answerSecurityQuestionInputs) {
		super(__answerSecurityQuestionInputs);
	}

}

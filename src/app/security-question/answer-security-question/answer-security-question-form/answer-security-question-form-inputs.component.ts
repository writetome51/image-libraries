import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { GetSecurityQuestionInputsService }
	from '../../../services/validating-inputs/get-security-question-inputs.service';


@Component({
	selector: 'answer-security-question-form-inputs',
	template: `<validating-inputs [inputs]="inputs"></validating-inputs>`
})
export class AnswerSecurityQuestionFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__getSecurityQuestionInputs: GetSecurityQuestionInputsService) {
		super(__getSecurityQuestionInputs);
	}

}

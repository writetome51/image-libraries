import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { GetSecurityQuestionInputsService }
	from '../../services/validating-inputs/current-user-inputs/get-security-question-inputs.service';


@Component({
	selector: 'get-security-question-form-inputs',
	template: `
		<validating-inputs [data]="inputs"></validating-inputs>`
})
export class GetSecurityQuestionFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__getSecurityQuestionInputs: GetSecurityQuestionInputsService) {
		super(__getSecurityQuestionInputs);
	}

}

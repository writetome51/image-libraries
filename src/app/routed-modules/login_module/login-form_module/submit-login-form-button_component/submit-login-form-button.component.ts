import { Component } from '@angular/core';
import { ValidatingLoginInputsService } from '../validating-login-inputs.service';
import { ProcessLoginByPasswordService }
	from './process-login-by-password_service/process-login-by-password.service';


@Component({
	selector: 'submit-login-form-button',
	template: `
		<submit-form-button [label]="'Sign In'"  [validatingInputs]="inputs"  [iDoThis]="process">
		</submit-form-button>
	`
})
export class SubmitLoginFormButtonComponent {

	constructor(
		public process: ProcessLoginByPasswordService, public inputs: ValidatingLoginInputsService
	) {}

}

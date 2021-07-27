import { Component } from '@angular/core';
import { ValidatingNewUserInputsService }
	from '../validating-new-user-inputs_service/validating-new-user-inputs.service';
import { ProcessCreateUserService }
	from './process-create-user_service/process-create-user.service';


@Component({
	selector: 'submit-new-user-form-button',
	template: `
		<submit-form-button [label]="'Create'"  [validatingInputs]="inputs"  [iDoThis]="process">
		</submit-form-button>
	`
})
export class SubmitNewUserFormButtonComponent {

	constructor(
		public process: ProcessCreateUserService, public inputs: ValidatingNewUserInputsService
	) {}

}

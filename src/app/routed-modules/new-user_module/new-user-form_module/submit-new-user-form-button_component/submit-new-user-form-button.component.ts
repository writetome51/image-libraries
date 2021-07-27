import { Component } from '@angular/core';
import { NewUserInputsService } from '../new-user-inputs_service/new-user-inputs.service';
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

	constructor(public process: ProcessCreateUserService, public inputs: NewUserInputsService) {}

}

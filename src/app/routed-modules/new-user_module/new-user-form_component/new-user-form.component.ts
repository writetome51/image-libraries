import { Component } from '@angular/core';
import { ProcessCreateUserService }
	from './process-create-user_service/process-create-user.service';
import { NewUserInputsService } from './new-user-inputs_service/new-user-inputs.service';


@Component({
	selector: 'new-user-form',
	template: `
		<div class="form-container">
			<form>
				<new-user-form-inputs></new-user-form-inputs>
				<submit-form-button [label]="'Create'" [validatingInputs]="inputs"
					[iDoThis]="process"
				></submit-form-button>
			</form>
		</div>
	`
})
export class NewUserFormComponent {

	constructor(
		public process: ProcessCreateUserService, public inputs: NewUserInputsService
	) {}

}

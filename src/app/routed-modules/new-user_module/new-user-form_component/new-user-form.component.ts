import { Component } from '@angular/core';
import { ProcessCreateUserService }
	from './process-create-user_service/process-create-user.service';


@Component({
	selector: 'new-user-form',
	template: `
		<div class="form-container">
			<form>
				<new-user-form-inputs></new-user-form-inputs>
				<submit-form-button [label]="'Create'" [process]="process"></submit-form-button>
			</form>
		</div>
	`
})
export class NewUserFormComponent {

	constructor(public process: ProcessCreateUserService) {}

}

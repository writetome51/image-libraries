import { Component } from '@angular/core';
import { CreateUserProcessorService } from './create-user-processor_service/create-user-processor.service';


@Component({
	selector: 'new-user-form',
	template: `
		<div class="form-container">
			<form>
				<new-user-form-inputs></new-user-form-inputs>
				<submit-form-button [label]="'Create'" [processor]="processor"></submit-form-button>
			</form>
		</div>
	`
})
export class NewUserFormComponent {

	constructor(public processor: CreateUserProcessorService) {
	}

}

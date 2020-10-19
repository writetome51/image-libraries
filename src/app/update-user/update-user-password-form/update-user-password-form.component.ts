import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from './update-password-processor/update-password-processor.service';


@Component({
	selector: 'update-user-password-form',
	template: `
		<clear-form-on-init-and-alert-on-destroy-container>
			<update-user-password-form-inputs></update-user-password-form-inputs>
			<save-changes-button [processor]="processor"></save-changes-button>
		</clear-form-on-init-and-alert-on-destroy-container>
	`
})
export class UpdateUserPasswordFormComponent {

	constructor(public processor: UpdatePasswordProcessorService) {
	}

}

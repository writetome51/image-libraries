import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from './update-email-processor/update-email-processor.service';


@Component({
	selector: 'update-email-form',
	template: `
		<clear-form-on-init-and-alert-on-destroy-container>
			<update-email-form-inputs></update-email-form-inputs>
			<save-changes-button [processor]="processor"></save-changes-button>
		</clear-form-on-init-and-alert-on-destroy-container>
	`
})
export class UpdateEmailFormComponent {

	constructor(public processor: UpdateEmailProcessorService) {
	}

}

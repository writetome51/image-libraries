import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '@abstract-components/clear-form-on-init-and-alert-on-destroy.component';
import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from './update-email-processor/update-email-processor.service';


@Component({
	selector: 'update-email-form',
	template: `
		<update-email-form-inputs></update-email-form-inputs>
		<save-changes-button [processor]="processor"></save-changes-button>
	`
})
export class UpdateEmailFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	constructor(public processor: UpdateEmailProcessorService) {
		super();
	}

}

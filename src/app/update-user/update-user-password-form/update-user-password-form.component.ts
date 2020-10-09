import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '@abstract-components/clear-form-on-init-and-alert-on-destroy.component';
import { UpdatePasswordProcessorService }
	from './update-password-processor/update-password-processor.service';


@Component({
	selector: 'update-user-password-form',
	template: `
		<update-user-password-form-inputs></update-user-password-form-inputs>
		<save-changes-button [processor]="processor"></save-changes-button>
	`
})
export class UpdateUserPasswordFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	constructor(public processor: UpdatePasswordProcessorService) {
		super();
	}

}

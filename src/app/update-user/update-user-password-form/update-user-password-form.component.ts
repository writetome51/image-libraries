import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from './update-password-processor/update-password-processor.service';


@Component({
	selector: 'update-user-password-form',
	template: `
		<update-user-password-form-inputs clearFormOnInit clearAlertOnDestroy>
		</update-user-password-form-inputs>
		<save-changes-button [processor]="processor"></save-changes-button>
	`
})
export class UpdateUserPasswordFormComponent {

	constructor(public processor: UpdatePasswordProcessorService) {
	}

}

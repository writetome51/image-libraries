import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from './update-password-processor/update-password-processor.service';


@Component({
	selector: 'update-user-password-form',
	template: `
		<update-user-password-form-inputs clearFormOnInit clearAlertOnDestroy>
		</update-user-password-form-inputs>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class UpdateUserPasswordFormComponent {

	constructor(public processor: UpdatePasswordProcessorService) {
	}

}

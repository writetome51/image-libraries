import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from './update-password-processor_service/update-password-processor.service';


@Component({
	selector: 'update-password-form',
	template: `
		<update-password-form-inputs clearFormOnInit clearAlertOnDestroy>
		</update-password-form-inputs>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class UpdatePasswordFormComponent {

	constructor(public processor: UpdatePasswordProcessorService) {
	}

}

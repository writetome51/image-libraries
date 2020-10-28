import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from './update-email-processor/update-email-processor.service';


@Component({
	selector: 'update-email-form',
	template: `
		<update-email-form-inputs clearFormOnInit clearAlertOnDestroy></update-email-form-inputs>
		<submit-form-button [processor]="processor"></submit-form-button>
	`
})
export class UpdateEmailFormComponent {

	constructor(public processor: UpdateEmailProcessorService) {
	}

}

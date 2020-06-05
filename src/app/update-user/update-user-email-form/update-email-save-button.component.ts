import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/data-transport-processor/update/update-email-processor.service';
import { StartDataProcessComponent } from '../../start-data-process.component';


@Component({
	selector: 'update-email-save-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="start">
			Save Changes
		</processing-button>
	`
})
export class UpdateEmailSaveButtonComponent extends StartDataProcessComponent {

	constructor(__updateEmailProcessor: UpdateEmailProcessorService) {
		super(__updateEmailProcessor);
	}

}

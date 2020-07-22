import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from './update-email-processor.service';
import { StartDataProcessComponent } from '../../../shared/abstract-components/start-data-process.component';


@Component({
	selector: 'update-email-save-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Save Changes
		</start-data-process-button>
	`
})
export class UpdateEmailSaveButtonComponent extends StartDataProcessComponent {

	constructor(__updateEmailProcessor: UpdateEmailProcessorService) {
		super(__updateEmailProcessor);
	}

}

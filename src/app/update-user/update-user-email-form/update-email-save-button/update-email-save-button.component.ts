import { Component } from '@angular/core';
import { UpdateEmailProcessorService } from './update-email-processor.service';
import { StartDataProcessContainerComponent } from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'update-email-save-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Save Changes
		</start-data-process-button>
	`
})
export class UpdateEmailSaveButtonComponent extends StartDataProcessContainerComponent {

	constructor(__updateEmailProcessor: UpdateEmailProcessorService) {
		super(__updateEmailProcessor);
	}

}

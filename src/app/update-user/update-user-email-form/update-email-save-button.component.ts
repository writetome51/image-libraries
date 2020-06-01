import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/data-transport-processor/update/update-email-processor.service';
import { DataProcessorComponent } from '../../data-processor.component';


@Component({
	selector: 'update-email-save-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Save Changes
		</processing-button>
	`
})
export class UpdateEmailSaveButtonComponent extends DataProcessorComponent {

	constructor(__updateEmailProcessor: UpdateEmailProcessorService) {
		super(__updateEmailProcessor);
	}

}

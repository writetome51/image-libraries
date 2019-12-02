import { Component } from '@angular/core';
import { UpdateEmailProcessorService }
	from '../../services/data-operation-processor/update-email-processor.service';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';


@Component({
	selector: 'update-email-save-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Save Changes
		</processing-button>
	`
})
export class UpdateEmailSaveButtonComponent extends DataOperationProcessorComponent {

	constructor(__updateEmailProcessor: UpdateEmailProcessorService) {
		super(__updateEmailProcessor);
	}

}

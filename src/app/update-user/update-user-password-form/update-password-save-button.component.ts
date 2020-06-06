import { Component } from '@angular/core';
import { UpdatePasswordProcessorService }
	from '../../services/data-transport-processor/update/update-password-processor.service';
import { StartDataProcessComponent } from '../../start-data-process.component';


@Component({
	selector: 'update-password-save-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Save Changes
		</start-data-process-button>
	`
})
export class UpdatePasswordSaveButtonComponent extends StartDataProcessComponent {

	constructor(__updatePasswordProcessor: UpdatePasswordProcessorService) {
		super(__updatePasswordProcessor);
	}

}

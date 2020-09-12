import { Component } from '@angular/core';
import { UpdatePasswordProcessorService } from './update-password-processor.service';
import { StartDataProcessContainerComponent } from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'update-password-save-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Save Changes
		</start-data-process-button>
	`
})
export class UpdatePasswordSaveButtonComponent extends StartDataProcessContainerComponent {

	constructor(__updatePasswordProcessor: UpdatePasswordProcessorService) {
		super(__updatePasswordProcessor);
	}

}

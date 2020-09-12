import { Component } from '@angular/core';
import { StartDataProcessContainerComponent } from '@abstract-components/start-data-process-container.component';
import { DeleteUserProcessorService } from './delete-user-processor/delete-user-processor.service';


@Component({
	selector: 'delete-user-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Delete
		</start-data-process-button>
	`
})
export class DeleteUserButtonComponent extends StartDataProcessContainerComponent {

	constructor(__deleteUserProcessor: DeleteUserProcessorService) {
		super(__deleteUserProcessor);
	}

}

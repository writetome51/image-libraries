import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../../start-data-process.component';
import { DeleteUserProcessorService }
	from './delete-user-processor.service';


@Component({
	selector: 'delete-user-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Delete
		</start-data-process-button>
	`
})
export class DeleteUserButtonComponent extends StartDataProcessComponent {

	constructor(__deleteUserProcessor: DeleteUserProcessorService) {
		super(__deleteUserProcessor);
	}

}

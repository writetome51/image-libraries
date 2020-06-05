import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../start-data-process.component';
import { DeleteUserProcessorService }
	from '../../services/data-transport-processor/delete-user-processor/delete-user-processor.service';


@Component({
	selector: 'delete-user-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="start">
			Delete
		</processing-button>
	`
})
export class DeleteUserButtonComponent extends StartDataProcessComponent {

	constructor(__deleteUserProcessor: DeleteUserProcessorService) {
		super(__deleteUserProcessor);
	}

}

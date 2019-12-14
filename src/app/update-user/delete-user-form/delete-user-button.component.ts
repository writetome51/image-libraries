import { Component } from '@angular/core';
import { UserDeletionProcessorService }
	from '../../services/data-transport-processor/user-deletion-processor.service';
import { DataProcessorComponent } from '../../data-processor.component';


@Component({
	selector: 'delete-user-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Delete
		</processing-button>
	`
})
export class DeleteUserButtonComponent extends DataProcessorComponent {

	constructor(__userDeletionProcessor: UserDeletionProcessorService) {
		super(__userDeletionProcessor);
	}

}

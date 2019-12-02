import { Component } from '@angular/core';
import { UserDeletionProcessorService }
	from '../../services/data-operation-processor/user-deletion-processor.service';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';


@Component({
	selector: 'delete-user-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Delete
		</processing-button>
	`
})
export class DeleteUserButtonComponent extends DataOperationProcessorComponent {

	constructor(__userDeletionProcessor: UserDeletionProcessorService) {
		super(__userDeletionProcessor);
	}

}

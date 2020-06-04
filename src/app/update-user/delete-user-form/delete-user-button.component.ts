import { Component } from '@angular/core';
import { DataProcessorComponent } from '../../data-processor.component';
import { DeleteUserProcessorService }
	from '../../services/data-transport-processor/delete-user-processor/delete-user-processor.service';


@Component({
	selector: 'delete-user-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Delete
		</processing-button>
	`
})
export class DeleteUserButtonComponent extends DataProcessorComponent {

	constructor(__deleteUserProcessor: DeleteUserProcessorService) {
		super(__deleteUserProcessor);
	}

}

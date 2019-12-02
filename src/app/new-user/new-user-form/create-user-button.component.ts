import { Component } from '@angular/core';
import { NewUserProcessorService }
	from '../../services/data-operation-processor/new-user-processor.service';
import { DataOperationProcessorComponent } from '../../data-operation-processor.component';


@Component({
	selector: 'create-user-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Create
		</processing-button>
	`
})
export class CreateUserButtonComponent extends DataOperationProcessorComponent {

	constructor(__newUserProcessor: NewUserProcessorService) {
		super(__newUserProcessor);
	}

}

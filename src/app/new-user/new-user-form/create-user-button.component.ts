import { Component } from '@angular/core';
import { NewUserProcessorService }
	from '../../services/data-transport-processor/new-user-processor.service';
import { DataProcessorComponent } from '../../data-processor.component';


@Component({
	selector: 'create-user-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Create
		</processing-button>
	`
})
export class CreateUserButtonComponent extends DataProcessorComponent {

	constructor(__newUserProcessor: NewUserProcessorService) {
		super(__newUserProcessor);
	}

}

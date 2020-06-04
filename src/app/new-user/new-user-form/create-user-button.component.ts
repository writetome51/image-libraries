import { Component } from '@angular/core';
import { CreateUserProcessorService }
	from '../../services/data-transport-processor/create-user-processor/create-user-processor.service';
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

	constructor(__createUserProcessor: CreateUserProcessorService) {
		super(__createUserProcessor);
	}

}

import { Component } from '@angular/core';
import { CreateUserProcessorService } from './create-user-processor/create-user-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'create-user-button',
	template: `
		<start-data-process-button [type]="'submit'" [container]="this">
			Create
		</start-data-process-button>
	`
})
export class CreateUserButtonComponent extends StartDataProcessContainerComponent {

	constructor(__createUserProcessor: CreateUserProcessorService) {
		super(__createUserProcessor);
	}

}

import { Component } from '@angular/core';
import { CreateLibraryProcessorService }
	from './create-library-processor/create-library-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'create-library-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Create
		</start-data-process-button>
	`
})
export class CreateLibraryButtonComponent extends StartDataProcessContainerComponent {

	constructor(__createLibraryProcessor: CreateLibraryProcessorService) {
		super(__createLibraryProcessor);
	}

}

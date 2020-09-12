import { Component } from '@angular/core';
import { StartDataProcessContainerComponent } from '@abstract-components/start-data-process-container.component';
import { CreateLibraryProcessorService }
	from './create-library-processor/create-library-processor.service';


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

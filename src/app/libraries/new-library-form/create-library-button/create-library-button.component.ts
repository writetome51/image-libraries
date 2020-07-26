import { Component } from '@angular/core';
import { StartDataProcessComponent }
	from '../../../shared/abstract-components/start-data-process.component';
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
export class CreateLibraryButtonComponent extends StartDataProcessComponent {

	constructor(__createLibraryProcessor: CreateLibraryProcessorService) {
		super(__createLibraryProcessor);
	}

}

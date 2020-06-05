import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../start-data-process.component';
import { CreateLibraryProcessorService }
	from '../../services/data-transport-processor/create-library-processor/create-library-processor.service';


@Component({
	selector: 'create-library-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="start">
			Create
		</processing-button>
	`
})
export class CreateLibraryButtonComponent extends StartDataProcessComponent {

	constructor(__createLibraryProcessor: CreateLibraryProcessorService) {
		super(__createLibraryProcessor);
	}

}

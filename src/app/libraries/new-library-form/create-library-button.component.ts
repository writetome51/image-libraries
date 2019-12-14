import { Component } from '@angular/core';
import { DataProcessorComponent } from '../../data-processor.component';
import { CreateLibraryProcessorService }
	from '../../services/data-transport-processor/create-library-processor.service';


@Component({
	selector: 'create-library-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Create Library
		</processing-button>
	`
})
export class CreateLibraryButtonComponent extends DataProcessorComponent {

	constructor(__createLibraryProcessor: CreateLibraryProcessorService) {
		super(__createLibraryProcessor);
	}

}

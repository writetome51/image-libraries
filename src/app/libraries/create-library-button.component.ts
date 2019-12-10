import { Component } from '@angular/core';
import { DataProcessorComponent } from '../data-processor.component';
import { NewLibraryProcessorService } from '../services/data-processor/new-library-processor.service';


@Component({
	selector: 'create-library-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Create Library
		</processing-button>
	`
})
export class CreateLibraryButtonComponent extends DataProcessorComponent {

	constructor(__newLibraryProcessor: NewLibraryProcessorService) {
		super(__newLibraryProcessor);
	}

}

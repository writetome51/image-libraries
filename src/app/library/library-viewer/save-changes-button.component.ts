import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../start-data-process.component';
import { UpdateLibraryProcessorService }
	from '../../services/data-transport-processor/update/update-library-processor.service';


@Component({
	selector: 'save-changes-button',
	template: `
		<processing-button [context]="this" [clickHandler]="start">
			Save Changes
		</processing-button>
	`
})
export class SaveChangesButtonComponent extends StartDataProcessComponent {

	constructor(__updateLibraryProcessor: UpdateLibraryProcessorService) {
		super(__updateLibraryProcessor);
	}

}

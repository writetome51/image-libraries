import { Component } from '@angular/core';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';
import { UpdateLibraryProcessorService }
	from '@data-transport-processor/update-library-processor/update-library-processor.service';


@Component({
	selector: 'save-changes-button',
	template: `
		<start-data-process-button [container]="this">Save Changes</start-data-process-button>
	`
})
export class SaveChangesButtonComponent extends StartDataProcessContainerComponent {

	constructor(__updateLibraryProcessor: UpdateLibraryProcessorService) {
		super(__updateLibraryProcessor);
	}

}

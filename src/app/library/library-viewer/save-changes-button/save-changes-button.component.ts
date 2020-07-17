import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../../start-data-process.component';
import { UpdateLibraryProcessorService } from './update-library-processor.service';


@Component({
	selector: 'save-changes-button',
	template: `
		<start-data-process-button [context]="this">Save Changes</start-data-process-button>
	`
})
export class SaveChangesButtonComponent extends StartDataProcessComponent {

	constructor(__updateLibraryProcessor: UpdateLibraryProcessorService) {
		super(__updateLibraryProcessor);
	}

}

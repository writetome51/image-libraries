import { Component } from '@angular/core';
import { ExecuteFunctionContainerComponent }
	from '@abstract-components/execute-function-container.component';
import { UpdateLibraryProcessorService }
	from '@data-transport-processor/update-library-processor/update-library-processor.service';


@Component({
	selector: 'save-changes-button',
	template: `
		<start-function-execution-button
				[container]="this">Save Changes</start-function-execution-button>
	`
})
export class SaveChangesButtonComponent extends ExecuteFunctionContainerComponent {

	constructor(__updateLibraryProcessor: UpdateLibraryProcessorService) {
		super(__updateLibraryProcessor);
	}

}

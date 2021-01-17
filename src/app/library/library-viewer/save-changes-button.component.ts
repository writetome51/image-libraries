import { Component } from '@angular/core';
import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.component';
import { UpdateLibraryProcessorService }
	from '@data-transport-processor/update-library-processor/update-library-processor.service';


@Component({
	selector: 'save-changes-button',
	template: `
		<execute-function-button
				[container]="this">Save Changes</execute-function-button>
	`
})
export class SaveChangesButtonComponent extends ClickExecuteFunctionContainerComponent {

	constructor(__updateLibraryProcessor: UpdateLibraryProcessorService) {
		super(__updateLibraryProcessor);
	}

}

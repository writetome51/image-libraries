import { Component } from '@angular/core';
import { UpdateLibraryProcessorService }
	from '@data-transport-processor/update-library-processor/update-library-processor.service';
import { ClickExecuteProcessContainerComponent }
	from '@abstract-components/click-execute-process-container.component';


@Component({
	selector: 'save-changes-button',
	template: `
		<execute-function-button [container]="this">Save Changes</execute-function-button>
	`
})
export class SaveChangesButtonComponent extends ClickExecuteProcessContainerComponent {

	constructor(__processor: UpdateLibraryProcessorService) {
		super(__processor);
	}

}

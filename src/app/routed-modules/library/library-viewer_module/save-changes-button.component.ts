import { Component } from '@angular/core';
import { ProcessUpdateLibraryService }
	from '@services/process-related/process-update-library_service/process-update-library.service';
import { ClickExecuteProcessContainerComponent }
	from '@abstract-components/click-execute-process-container.abstract.component';


@Component({
	selector: 'save-changes-button',
	template: `
		<execute-function-button [container]="this">Save Changes</execute-function-button>
	`
})
export class SaveChangesButtonComponent extends ClickExecuteProcessContainerComponent {

	constructor(_process: ProcessUpdateLibraryService) {
		super(_process);
	}

}

import { Component } from '@angular/core';
import { ProcessUpdateLibraryService }
	from '@process/process-update-library_service/process-update-library.service';
import { ClickExecuteIDoThisContainerComponent }
	from '@abstract-components/click-execute-i-do-this-container.abstract.component';


@Component({
	selector: 'save-changes-button',
	template: `
		<execute-function-button [container]="this">Save Changes</execute-function-button>
	`
})
export class SaveChangesButtonComponent extends ClickExecuteIDoThisContainerComponent {

	constructor(_iDoThis: ProcessUpdateLibraryService) {
		super(_iDoThis);
	}

}

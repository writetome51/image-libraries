import { Component } from '@angular/core';
import { ProcessUpdateLibraryService }
	from '@process/process-update-library_service/process-update-library.service';
import { ClickExecuteIDoThisContextComponent }
	from '@abstract-components/click-execute-i-do-this-context.abstract.component';


@Component({
	selector: 'save-changes-button',
	template: `<execute-function-button [context]="this">Save Changes</execute-function-button>`
})
export class SaveChangesButtonComponent extends ClickExecuteIDoThisContextComponent {

	constructor(_iDoThis: ProcessUpdateLibraryService) {
		super(_iDoThis);
	}

}

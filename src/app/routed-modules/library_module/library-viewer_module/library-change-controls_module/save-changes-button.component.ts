import { Component } from '@angular/core';
import { ProcessUpdateLibraryService }
	from '@process/process-update-library_service/process-update-library.service';
import { ClickExecuteIDoThisContextDirective }
	from '@app/shared/abstract-directives/click-execute-i-do-this-context.abstract.directive';


@Component({
	selector: 'save-changes-button',
	template: `<execute-function-button [context]="this">Save Changes</execute-function-button>`
})
export class SaveChangesButtonComponent extends ClickExecuteIDoThisContextDirective {

	constructor(_iDoThis: ProcessUpdateLibraryService) {
		super(_iDoThis);
	}

}

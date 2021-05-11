import { areYouSureDeleteLibrary } from '@string-constants/prompts';
import { ClickExecuteIDoThisContainerComponent }
	from '@abstract-components/click-execute-i-do-this-container.abstract.component';
import { Component } from '@angular/core';
import { ProcessDeleteLibraryService }
	from './process-delete-library_service/process-delete-library.service';


@Component({
	selector: 'delete-library-button',
	template: `<execute-function-button [container]="this">Delete Library</execute-function-button>`
})
export class DeleteLibraryButtonComponent extends ClickExecuteIDoThisContainerComponent {

	constructor(_iDoThis: ProcessDeleteLibraryService) {
		super(_iDoThis);
	}


	async execute(): Promise<void> {
		const confirmed = window.confirm(areYouSureDeleteLibrary);
		if (confirmed) await super.execute();
	}

}

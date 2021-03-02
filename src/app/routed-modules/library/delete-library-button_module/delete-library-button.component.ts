import { Component } from '@angular/core';
import { ProcessDeleteLibraryService }
	from './delete-library-processor_service/process-delete-library.service';
import { ClickExecuteProcessContainerComponent }
	from '@abstract-components/click-execute-process-container.abstract.component';


@Component({
	selector: 'delete-library-button',
	template: `
		<execute-function-button [container]="this">Delete Library</execute-function-button>
	`
})
export class DeleteLibraryButtonComponent extends ClickExecuteProcessContainerComponent {

	constructor(_process: ProcessDeleteLibraryService) {
		super(_process);
	}


	async execute(): Promise<void> {
		let confirmed = window.confirm('Are you sure you want to delete the library?');

		if (confirmed) await super.execute();
	}

}

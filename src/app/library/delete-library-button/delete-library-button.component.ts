import { Component } from '@angular/core';
import { StartDataProcessContainerComponent } from '@abstract-components/start-data-process-container.component';
import { DeleteLibraryProcessorService }
	from './delete-library-processor/delete-library-processor.service';


@Component({
	selector: 'delete-library-button',
	template: `
		<start-data-process-button [context]="this">Delete Library</start-data-process-button>
	`
})
export class DeleteLibraryButtonComponent extends StartDataProcessContainerComponent {

	constructor(__deleteLibraryProcessor: DeleteLibraryProcessorService) {
		super(__deleteLibraryProcessor);
	}


	async start(): Promise<void> {
		let confirmed = window.confirm('Are you sure you want to delete the library?');

		if (confirmed) await super.start();
	}

}

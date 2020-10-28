import { Component } from '@angular/core';
import { DeleteLibraryProcessorService }
	from './delete-library-processor/delete-library-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'delete-library-button',
	template: `
		<start-data-process-button [container]="this">Delete Library</start-data-process-button>
	`
})
export class DeleteLibraryButtonComponent extends StartDataProcessContainerComponent {

	constructor(_deleteLibraryProcessor: DeleteLibraryProcessorService) {
		super(_deleteLibraryProcessor);
	}


	async start(): Promise<void> {
		let confirmed = window.confirm('Are you sure you want to delete the library?');

		if (confirmed) await super.start();
	}

}

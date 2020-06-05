import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../start-data-process.component';
import { DeleteLibraryProcessorService }
	from '../services/data-transport-processor/delete-library-processor/delete-library-processor.service';


@Component({
	selector: 'delete-library-button',
	template: `
		<processing-button [context]="this" [clickHandler]="start">
			Delete Library
		</processing-button>
	`
})
export class DeleteLibraryButtonComponent extends StartDataProcessComponent {

	constructor(__deleteLibraryProcessor: DeleteLibraryProcessorService) {
		super(__deleteLibraryProcessor);
	}


	async start(): Promise<void> {
		let confirmed = window.confirm('Are you sure you want to delete the library?');

		if (confirmed) super.start();
	}

}

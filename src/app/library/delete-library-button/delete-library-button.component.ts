import { Component } from '@angular/core';
import { DeleteLibraryProcessorService }
	from './delete-library-processor/delete-library-processor.service';
import { ExecuteFunctionContainerComponent }
	from '@abstract-components/execute-function-container.component';


@Component({
	selector: 'delete-library-button',
	template: `
		<start-function-execution-button
			[container]="this">Delete Library</start-function-execution-button>
	`
})
export class DeleteLibraryButtonComponent extends ExecuteFunctionContainerComponent {

	constructor(_deleteLibraryProcessor: DeleteLibraryProcessorService) {
		super(_deleteLibraryProcessor);
	}


	async execute(): Promise<void> {
		let confirmed = window.confirm('Are you sure you want to delete the library?');

		if (confirmed) await super.execute();
	}

}

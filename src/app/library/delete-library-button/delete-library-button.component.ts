import { Component } from '@angular/core';
import { DeleteLibraryProcessorService }
	from './delete-library-processor/delete-library-processor.service';
import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.component';


@Component({
	selector: 'delete-library-button',
	template: `
		<execute-function-button
			[container]="this">Delete Library</execute-function-button>
	`
})
export class DeleteLibraryButtonComponent extends ClickExecuteFunctionContainerComponent {

	constructor(_deleteLibraryProcessor: DeleteLibraryProcessorService) {
		super(_deleteLibraryProcessor);
	}


	async execute(): Promise<void> {
		let confirmed = window.confirm('Are you sure you want to delete the library?');

		if (confirmed) await super.execute();
	}

}

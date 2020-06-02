import { Component } from '@angular/core';
import { DataProcessorComponent } from '../data-processor.component';
import { DeleteLibraryProcessorService }
	from '../services/data-transport-processor/delete-library-processor.service';


@Component({
	selector: 'delete-library-button',
	template: `
		<processing-button [context]="this" [clickHandler]="process">
			Delete Library
		</processing-button>
	`
})
export class DeleteLibraryButtonComponent extends DataProcessorComponent {

	constructor(__deleteLibraryProcessor: DeleteLibraryProcessorService) {
		super(__deleteLibraryProcessor);
	}


	async process(): Promise<void> {
		let affirmative = window.confirm('Are you sure you want to delete the library?');

		if (affirmative) super.process();
		else return;
	}

}

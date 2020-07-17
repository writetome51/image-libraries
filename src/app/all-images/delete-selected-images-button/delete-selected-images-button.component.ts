import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../start-data-process.component';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';


@Component({
	selector: 'delete-selected-images-button',
	template: `
		<start-data-process-button [context]="this">Delete Selected Images
		</start-data-process-button>
	`
})
export class DeleteSelectedImagesButtonComponent extends StartDataProcessComponent {

	constructor(__deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService) {
		super(__deleteSelectedImagesProcessor);
	}

}

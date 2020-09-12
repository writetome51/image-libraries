import { Component } from '@angular/core';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { StartDataProcessContainerComponent } from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'delete-selected-images-button',
	template: `
		<start-data-process-button [context]="this">Delete Selected Images
		</start-data-process-button>
	`
})
export class DeleteSelectedImagesButtonComponent extends StartDataProcessContainerComponent {

	constructor(__deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService) {
		super(__deleteSelectedImagesProcessor);
	}

}

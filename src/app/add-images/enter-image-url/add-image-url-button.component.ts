import { Component } from '@angular/core';
import { StartDataProcessContainerComponent } from '@abstract-components/start-data-process-container.component';
import { ImageURLProcessorService } from './image-url-processor.service';


@Component({
	selector: 'add-image-url-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Add URL
		</start-data-process-button>
	`
})
export class AddImageUrlButtonComponent extends StartDataProcessContainerComponent {

	constructor(__imageURLProcessor: ImageURLProcessorService) {
		super(__imageURLProcessor);
	}

}

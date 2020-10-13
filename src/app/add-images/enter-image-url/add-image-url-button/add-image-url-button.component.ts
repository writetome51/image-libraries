import { Component } from '@angular/core';
import { ImageURLProcessorService } from './image-url-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'add-image-url-button',
	template: `
		<start-data-process-button [type]="'submit'" [container]="this">
			Add URL
		</start-data-process-button>
	`
})
export class AddImageUrlButtonComponent extends StartDataProcessContainerComponent {

	constructor(__imageURLProcessor: ImageURLProcessorService) {
		super(__imageURLProcessor);
	}

}

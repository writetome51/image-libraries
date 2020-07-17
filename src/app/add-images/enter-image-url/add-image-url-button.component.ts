import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../start-data-process.component';
import { ImageURLProcessorService } from './image-url-processor.service';


@Component({
	selector: 'add-image-url-button',
	template: `
		<start-data-process-button [type]="'submit'" [context]="this">
			Add URL
		</start-data-process-button>
	`
})
export class AddImageUrlButtonComponent extends StartDataProcessComponent {

	constructor(__imageURLProcessor: ImageURLProcessorService) {
		super(__imageURLProcessor);
	}

}

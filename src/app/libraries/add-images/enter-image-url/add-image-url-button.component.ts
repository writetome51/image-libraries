import { Component } from '@angular/core';
import { StartDataProcessComponent } from '../../../start-data-process.component';
import { ImageURLProcessorService } from '../../../services/image/image-url-processor.service';


@Component({
	selector: 'add-image-url-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="start">
			Add URL
		</processing-button>
	`
})
export class AddImageUrlButtonComponent extends StartDataProcessComponent {

	constructor(__imageURLProcessor: ImageURLProcessorService) {
		super(__imageURLProcessor);
	}

}

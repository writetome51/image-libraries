import { Component } from '@angular/core';
import { DataProcessorComponent } from '../../../../data-processor.component';
import { ImageURLProcessorService } from '../../../../services/image/image-url-processor.service';


@Component({
	selector: 'add-image-url-button',
	template: `
		<processing-button [type]="'submit'" [context]="this" [clickHandler]="process">
			Add URL
		</processing-button>
	`
})
export class AddImageUrlButtonComponent extends DataProcessorComponent {

	constructor(__imageURLProcessor: ImageURLProcessorService) {
		super(__imageURLProcessor);
	}

}

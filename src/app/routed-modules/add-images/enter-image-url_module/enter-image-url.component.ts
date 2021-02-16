import { Component } from '@angular/core';
import { AddImageURLProcessorService } from './add-image-url-processor_service/add-image-url-processor.service';


@Component({
	selector: 'enter-image-url',
	template: `
		<image-url-form-input clearFormOnInit clearAlertOnDestroy></image-url-form-input>
		<submit-form-button [label]="'Add URL'" [processor]="processor"></submit-form-button>
	`
})
export class EnterImageURLComponent {

	constructor(public processor: AddImageURLProcessorService) {
	}

}

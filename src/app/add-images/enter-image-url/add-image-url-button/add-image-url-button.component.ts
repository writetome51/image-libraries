import { Component } from '@angular/core';
import { AddImageURLProcessorService } from './add-image-url-processor.service';
import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.component';


@Component({
	selector: 'add-image-url-button',
	template: `
		<execute-function-button [type]="'submit'" [container]="this">
			Add URL
		</execute-function-button>
	`
})
export class AddImageUrlButtonComponent extends ClickExecuteFunctionContainerComponent {

	constructor(__processor: AddImageURLProcessorService) {
		super(__processor);
	}

}

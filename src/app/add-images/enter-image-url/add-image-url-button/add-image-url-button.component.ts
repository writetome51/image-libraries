import { Component } from '@angular/core';
import { AddImageURLProcessorService } from './add-image-url-processor.service';
import { ExecuteFunctionContainerComponent }
	from '@abstract-components/execute-function-container.component';


@Component({
	selector: 'add-image-url-button',
	template: `
		<start-function-execution-button [type]="'submit'" [container]="this">
			Add URL
		</start-function-execution-button>
	`
})
export class AddImageUrlButtonComponent extends ExecuteFunctionContainerComponent {

	constructor(__processor: AddImageURLProcessorService) {
		super(__processor);
	}

}

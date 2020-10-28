import { Component, Input } from '@angular/core';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';


@Component({
	selector: 'submit-form-button',
	template: `
		<start-data-process-button [type]="'submit'" [container]="this">
			{{label}}
		</start-data-process-button>
	`
})
export class SubmitFormButtonComponent extends StartDataProcessContainerComponent {

	@Input() label = 'Submit';


	@Input() set processor(value: FormDataTransportProcessorService) {
		this._processor = value;
	}


	// Required to avoid Angular dependency injection error.

	constructor() {
		super();
	}

}

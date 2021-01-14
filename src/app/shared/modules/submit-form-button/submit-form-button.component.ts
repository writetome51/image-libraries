import { Component, Input } from '@angular/core';
import { FormDataTransportProcessorService }
	from '@services/processor/data-transport-processor/form-data-transport-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


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

import { Component, Input } from '@angular/core';
import { FormDataTransportProcessorService }
	from '@services/processor/data-transport-processor/form-data-transport-processor.service';
import { StartFunctionExecutionContainerComponent }
	from '@abstract-components/start-function-execution-container.component';
import { StartProcessContainerComponent } from '@abstract-components/start-process-container.component';


@Component({
	selector: 'submit-form-button',
	template: `
		<start-function-execution-button [type]="'submit'" [container]="this">
			{{label}}
		</start-function-execution-button>
	`
})
export class SubmitFormButtonComponent extends StartProcessContainerComponent {

	@Input() label = 'Submit';


	@Input() set processor(value: FormDataTransportProcessorService) {
		this._processor = value;
	}


	// Required to avoid Angular dependency injection error.

	constructor() {
		super();
	}

}

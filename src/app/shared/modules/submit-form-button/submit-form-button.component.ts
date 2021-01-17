import { Component, Input } from '@angular/core';
import { FormDataTransportProcessorService }
	from '@services/processor/data-transport-processor/form-data-transport-processor.service';
import { ClickExecuteProcessContainerComponent }
	from '@abstract-components/click-execute-process-container.component';


@Component({
	selector: 'submit-form-button',
	template: `
		<execute-function-button [type]="'submit'" [container]="this">
			{{label}}
		</execute-function-button>
	`
})
export class SubmitFormButtonComponent extends ClickExecuteProcessContainerComponent {

	@Input() label = 'Submit';


	@Input() set processor(value: FormDataTransportProcessorService) {
		this._processor = value;
	}


	// Required to avoid Angular dependency injection error.

	constructor() {
		super();
	}

}

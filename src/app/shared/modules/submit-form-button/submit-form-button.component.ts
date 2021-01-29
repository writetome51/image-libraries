import { Component, Input } from '@angular/core';
import { ClickExecuteProcessContainerComponent }
	from '@abstract-components/click-execute-process-container.component';
import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';


@Component({
	selector: 'submit-form-button',
	template: `
		<execute-function-button [type]="'submit'" [container]="this">
			{{label}}
		</execute-function-button>
	`
})
export class SubmitFormButtonComponent extends ClickExecuteProcessContainerComponent {

	@Input() set processor(value: FormDataTransportProcessorService) {
		this._processor = value;
	}

	@Input() label = 'Submit';


	// Required to avoid Angular dependency injection error.

	constructor() {
		super();
	}

}

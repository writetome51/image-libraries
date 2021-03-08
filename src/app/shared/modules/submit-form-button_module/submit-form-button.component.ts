import { Component, Input } from '@angular/core';
import { ClickExecuteProcessContainerComponent }
	from '@abstract-components/click-execute-process-container.abstract.component';
import { ProcessSendFormDataToDbService }
	from '@process/process-send-form-data-to-db.abstract.service';


@Component({
	selector: 'submit-form-button',
	template: `
		<execute-function-button [type]="'submit'" [container]="this">
			{{label}}
		</execute-function-button>
	`
})
export class SubmitFormButtonComponent extends ClickExecuteProcessContainerComponent {

	@Input() set process(value: ProcessSendFormDataToDbService) {
		this._process = value;
	}

	@Input() label = 'Submit';


	// Required to avoid Angular dependency injection error.

	constructor() {
		super();
	}

}

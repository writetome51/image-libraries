import { Component, Input } from '@angular/core';
import { ClickExecuteIDoThisContainerComponent }
	from '@abstract-components/click-execute-i-do-this-container.abstract.component';
import { ProcessSendFormDataService }
	from '@process/process-send-form-data.abstract.service';


@Component({
	selector: 'submit-form-button',
	template: `
		<execute-function-button [type]="'submit'" [container]="this">
			{{label}}
		</execute-function-button>
	`
})
export class SubmitFormButtonComponent extends ClickExecuteIDoThisContainerComponent {

	@Input() set iDoThis(value: ProcessSendFormDataService) {
		this._iDoThis = value;
	}

	@Input() label = 'Submit';


	// Required to avoid Angular dependency injection error.

	constructor() {
		super();
	}

}

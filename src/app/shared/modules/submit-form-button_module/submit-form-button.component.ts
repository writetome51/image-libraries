import { Component, Input } from '@angular/core';
import { ClickExecuteIDoThisContainerComponent }
	from '@abstract-components/click-execute-i-do-this-container.abstract.component';
import { SendFormData } from '@interfaces/send-form-data.interface';
import { AlertsService as alerts } from '@services/alerts.service';


@Component({
	selector: 'submit-form-button',
	template: `
		<execute-function-button [type]="'submit'" [container]="this">
			{{label}}
		</execute-function-button>
	`
})
export class SubmitFormButtonComponent extends ClickExecuteIDoThisContainerComponent {

	@Input() label = 'Submit';

	@Input() set iDoThis(sendFormData: SendFormData) {
		const sendFormData_go = sendFormData.go;
		this._iDoThis = sendFormData;

		this._iDoThis.go = async (...args) => {
			if (sendFormData.$_validatingInputs.isValid()) {
				await sendFormData_go.apply(sendFormData, args);
			}
			else alerts.setError(sendFormData.$_validatingInputs.error);
		};

	}


	// Required to avoid Angular dependency injection error.

	constructor() {
		super();
	}

}

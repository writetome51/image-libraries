import { AlertsService as alerts } from '@services/alerts.service';
import { Component, Input } from '@angular/core';
import { ClickExecuteIDoThisContextDirective }
	from '@abstract-directives/click-execute-i-do-this-context.abstract.directive';
import { isArray } from '@writetome51/is-array-not-array';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ValidatingInputService, ValidatingInputsService } from '@writetome51/validating-inputs';


@Component({
	selector: 'submit-form-button',
	template: `
		<execute-function-button [type]="'submit'" [context]="this">
			{{label}}
		</execute-function-button>
	`
})
export class SubmitFormButtonComponent extends ClickExecuteIDoThisContextDirective {

	@Input() label = 'Submit';
	@Input() validatingInputs: ValidatingInputService | ValidatingInputsService;


	@Input() set iDoThis(sendFormData: IDoThis) {
		const sendFormData_go = sendFormData.go;

		this._iDoThis = {
			go: async () => {
				if (this.validatingInputs.isValid()) {
					let inputValues = this.validatingInputs.getValue();
					await sendFormData_go.apply(
						sendFormData,
						isArray(inputValues) ? inputValues : [inputValues]
					);
				}
				else alerts.setError(this.validatingInputs.error);
			}
		};
	}


	// Required to avoid Angular dependency injection error.

	constructor() {
		super();
	}

}

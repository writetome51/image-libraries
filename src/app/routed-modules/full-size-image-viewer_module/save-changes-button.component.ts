import { Component } from '@angular/core';
import { ClickExecuteIDoThisContextComponent }
	from '@abstract-components/click-execute-i-do-this-context.abstract.component';
import { ProcessUpdateImagesService }
	from '@process/process-update-images.service';


@Component({
	selector: 'save-changes-button',
	template: `
		<submit-form-button [label]="'Save Changes'" [validatingInputs]="null"
			[iDoThis]="process"
		></submit-form-button>
	`
})
export class SaveChangesButtonComponent extends ClickExecuteIDoThisContextComponent {

	constructor(public process: ProcessUpdateImagesService) {
		super();
	}

}

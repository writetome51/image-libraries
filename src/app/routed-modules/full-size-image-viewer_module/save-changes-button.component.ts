import { Component } from '@angular/core';
import { ProcessUpdateImagesService } from '@process/process-update-images.service';


@Component({
	selector: 'save-changes-button',
	template: `
		<submit-form-button [label]="'Save Changes'" [validatingInputs]="null"
			[iDoThis]="process"
		></submit-form-button>
	`
})
export class SaveChangesButtonComponent {

	constructor(public process: ProcessUpdateImagesService) {}

}

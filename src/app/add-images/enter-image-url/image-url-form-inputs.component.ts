import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { ImageUrlInputsService } from './image-url-inputs.service';


@Component({
	selector: 'image-url-form-inputs',
	template: `
		<app-validating-form-inputs [data]="inputs"></app-validating-form-inputs>`
})
export class ImageUrlFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__imageURLInputs: ImageUrlInputsService) {
		super(__imageURLInputs);
	}

}

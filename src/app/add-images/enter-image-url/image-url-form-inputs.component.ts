import { Component } from '@angular/core';
import { ValidatingFormInputsComponent } from '@writetome51/validating-inputs';
import { ImageUrlInputsService } from './image-url-inputs.service';


@Component({
	selector: 'image-form-inputs',
	template: `<validating-inputs [data]="inputs"></validating-inputs>`
})
export class EnterImageUrlFormInputsComponent extends ValidatingFormInputsComponent {

	constructor(__imageURLInputs: ImageUrlInputsService) {
		super(__imageURLInputs);
	}

}

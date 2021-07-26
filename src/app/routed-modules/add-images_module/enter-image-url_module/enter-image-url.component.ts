import { Component } from '@angular/core';
import { SaveImageURLService } from './save-image-url.service';
import { ImageURLInputService } from './image-url-input.service';
import { ImageURLInputTextData } from '@runtime-state-data/image-url-input-text.data';


@Component({
	selector: 'enter-image-url',
	template: `
		<image-url-form-input clearAlertsOnDestroy
			resetToDefaultOnInit [data]="[imageURLInputText]"
		></image-url-form-input>

		<submit-form-button [label]="'Save URL'" [validatingInputs]="imageURLInput"
			[iDoThis]="saveImageURL"
		></submit-form-button>
	`
})
export class EnterImageURLComponent {

	imageURLInputText = ImageURLInputTextData;


	constructor(
		public saveImageURL: SaveImageURLService, public imageURLInput: ImageURLInputService
	) {}

}

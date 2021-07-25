import { Component } from '@angular/core';
import { SaveImageURLService } from './save-image-url.service';
import { ImageURLInputService } from './image-url-input.service';
import { ImageURLData } from '@runtime-state-data/image-url.data';


@Component({
	selector: 'enter-image-url',
	template: `
		<image-url-form-input clearAlertsOnDestroy
			clearFormOnInit [inputData]="[imageURL]"
		></image-url-form-input>

		<submit-form-button [label]="'Save URL'" [validatingInputs]="imageURLInput"
			[iDoThis]="saveImageURL"
		>
		</submit-form-button>
	`
})
export class EnterImageURLComponent {

	imageURL = ImageURLData;

	constructor(
		public saveImageURL: SaveImageURLService, public imageURLInput: ImageURLInputService
	) {}

}

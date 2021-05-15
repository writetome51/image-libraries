import { Component } from '@angular/core';
import { SaveImageURLService } from './save-image-url.service';
import { ImageURLInputService } from './image-url-input.service';


@Component({
	selector: 'enter-image-url',
	template: `
		<image-url-form-input clearFormOnInit clearAlertsOnDestroy></image-url-form-input>
		<submit-form-button [label]="'Save URL'" [validatingInputs]="imageURLInput"
							[iDoThis]="saveImageURL"
		>
		</submit-form-button>
	`
})
export class EnterImageURLComponent {

	constructor(
		public saveImageURL: SaveImageURLService, public imageURLInput: ImageURLInputService
	) {}

}

import { Component } from '@angular/core';
import { SaveImageURLService } from './save-image-url.service';


@Component({
	selector: 'enter-image-url',
	template: `
		<image-url-form-input clearFormOnInit clearAlertsOnDestroy></image-url-form-input>
		<submit-form-button [label]="'Save URL'" [iDoThis]="saveImageURL"></submit-form-button>
	`
})
export class EnterImageURLComponent {

	constructor(public saveImageURL: SaveImageURLService) {}

}

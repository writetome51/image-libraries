import { Component } from '@angular/core';
import { ProcessSaveImageURLService }
	from './process-save-image-url_service/process-save-image-url.service';


@Component({
	selector: 'enter-image-url',
	template: `
		<image-url-form-input clearFormOnInit clearAlertsOnDestroy></image-url-form-input>
		<submit-form-button [label]="'Save URL'" [iDoThis]="iDoThis"></submit-form-button>
	`
})
export class EnterImageURLComponent {

	constructor(public iDoThis: ProcessSaveImageURLService) {}

}

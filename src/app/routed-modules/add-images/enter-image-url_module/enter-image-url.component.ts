import { Component } from '@angular/core';
import { ProcessAddImageURLService } from './process-add-image-u-r-l_service/process-add-image-u-r-l.service';


@Component({
	selector: 'enter-image-url',
	template: `
		<image-url-form-input clearFormOnInit clearAlertOnDestroy></image-url-form-input>
		<submit-form-button [label]="'Add URL'" [process]="process"></submit-form-button>
	`
})
export class EnterImageURLComponent {

	constructor(public process: ProcessAddImageURLService) {
	}

}

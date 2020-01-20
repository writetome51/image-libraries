import { Component } from '@angular/core';
import { ImageURLProcessorService } from '../../../../services/image/image-url-processor.service';


@Component({
	selector: 'enter-image-url',
	templateUrl: './enter-image-url.component.html'
})
export class EnterImageURLComponent {

	private __imgURL = '';


	constructor(private __imageURLProcessor: ImageURLProcessorService) {
	}


	set imgURL(value) {
		this.__imgURL = value.trim();
	}


	get imgURL() {
		return this.__imgURL;
	}


}

import { Component } from '@angular/core';
import { ImageURLProcessorService } from '../../../services/image/image-url-processor.service';


@Component({
	selector: 'enter-image-url',
	template: `<add-image-url-button></add-image-url-button>`
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

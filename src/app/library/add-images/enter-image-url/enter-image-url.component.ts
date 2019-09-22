import { Component } from '@angular/core';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { ImageURLProcessorService } from '../../../services/image/image-url-processor.service';


@Component({
	selector: 'enter-image-url',
	templateUrl: './enter-image-url.component.html'
})
export class EnterImageURLComponent {

	private __imgURL = '';


	constructor(private __imageURLProcessor: ImageURLProcessorService,) {
	}


	set imgURL(value) {
		this.__imgURL = value.trim();
	}


	get imgURL() {
		return this.__imgURL.trim();
	}


	addURLToLibrary(): void {
		if (isEmpty(this.imgURL)) {
			alert('Please enter a URL first.');
			return;
		}
		this.__imageURLProcessor.process(this.imgURL);
		this.__imgURL = '';
	}


}

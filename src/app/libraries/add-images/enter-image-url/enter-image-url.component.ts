import { Component } from '@angular/core';
import { ImageURLProcessorService } from '../../../services/image/image-url-processor.service';
import { ImageURLData as enteredImageURL }
	from '../../../data/runtime-state-data/image-url.data';


@Component({
	selector: 'enter-image-url',
	templateUrl: './enter-image-url.component.html'
})
export class EnterImageURLComponent {


	constructor(private __imageURLProcessor: ImageURLProcessorService) {
	}


	set imgURL(value) {
		enteredImageURL.data = value.trim();
	}


	get imgURL() {
		return enteredImageURL.data;
	}


}

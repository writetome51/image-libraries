import { Component } from '@angular/core';
import { ImageProcessorService } from '../services/image-processor.service';
import { isEmpty } from '@writetome51/is-empty-not-empty';


@Component({
	selector: 'image-chooser',
	templateUrl: './image-chooser.component.html'
})
export class ImageChooserComponent {

	gettingImagesInstructions = `The images can come from somewhere else in the web or from your 
	own device.`;

	private __imgURL = '';


	constructor(private __imageProcessor: ImageProcessorService) {
	}


	set imgURL(value) {
		this.__imgURL = value.trim();
	}


	get imgURL() {
		return this.__imgURL;
	}


	addURLToLibrary() {
		if (isEmpty(this.__imgURL)) return;
		this.__imageProcessor.processImageURL(this.imgURL);
		this.__imgURL = '';
	}


	addImagesToLibrary(images: FileList) {
		this.__imageProcessor.process(images);
	}


}

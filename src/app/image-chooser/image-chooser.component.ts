import { Component } from '@angular/core';
import { ImagesProcessorService } from '../services/images-processor.service';
import { ImageURLProcessorService } from '../services/image-url-processor.service';
import { isEmpty } from '@writetome51/is-empty-not-empty';


@Component({
	selector: 'image-chooser',
	templateUrl: './image-chooser.component.html'
})
export class ImageChooserComponent {

	gettingImagesInstructions = `The images can come from somewhere else in the web or from your 
	own device.`;

	private __imgURL = '';


	constructor(
		private __imagesProcessor: ImagesProcessorService,
		private __imageURLProcessor: ImageURLProcessorService
	) {
	}


	set imgURL(value) {
		this.__imgURL = value.trim();
	}


	get imgURL() {
		return this.__imgURL;
	}


	addURLToLibrary() {
		if (isEmpty(this.imgURL)) return;
		this.__imageURLProcessor.process(this.imgURL);
		this.__imgURL = '';
	}


	addImagesToLibrary(images: FileList | File[]) {
		this.__imagesProcessor.process(images);
	}


}

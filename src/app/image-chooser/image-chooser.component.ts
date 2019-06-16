import { Component } from '@angular/core';
import { ImageProcessorService } from '../services/image-processor.service';


@Component({
	selector: 'image-chooser',
	templateUrl: './image-chooser.component.html'
})
export class ImageChooserComponent {

	gettingImagesInstructions = `The images can come from somewhere else in the web or from your 
	own device.`;

	private __urlToAdd = '';


	constructor(private __imageProcessor: ImageProcessorService) {
	}


	get doneProcessing() {
		return this.__imageProcessor.doneProcessing;
	}


	set urlToAdd(value) {
		this.__urlToAdd = value.trim();
	}


	get urlToAdd() {
		return this.__urlToAdd;
	}


	addToLibrary(images: FileList) {
		this.__imageProcessor.process(images);
	}


}

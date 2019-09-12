import { Component } from '@angular/core';
import { UploadedImagesProcessorService } from '../services/image/uploaded-images-processor.service';
import { ImageURLProcessorService } from '../services/image/image-url-processor.service';
import { LibraryService } from '../services/library/library.service';


@Component({
	selector: 'add-images',
	templateUrl: './add-images.component.html'
})
export class AddImagesComponent {

	gettingImagesInstructions = `The images can come from your own device or from somewhere 
	else in the web.`;


	constructor(
		private __imagesProcessor: UploadedImagesProcessorService,
		private __imageURLProcessor: ImageURLProcessorService,
		private __library: LibraryService
	) {
	}


	set libraryName(value) {
		this.__library.name = value.trim();
	}


	get libraryName(): string {
		return this.__library.name.trim();
	}


}

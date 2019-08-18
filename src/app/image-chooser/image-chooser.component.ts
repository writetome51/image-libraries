import { Component } from '@angular/core';
import { ImagesProcessorService } from '../services/images-processor.service';
import { ImageURLProcessorService } from '../services/image-url-processor.service';
import { isEmpty } from '@writetome51/is-empty-not-empty';
import { LibraryService } from '../services/library.service';


@Component({
	selector: 'image-chooser',
	templateUrl: './image-chooser.component.html'
})
export class ImageChooserComponent {

	gettingImagesInstructions = `The images can come from your own device or from somewhere 
	else in the web.`;

	private __imgURL = '';


	constructor(
		private __imagesProcessor: ImagesProcessorService,
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


	set imgURL(value) {
		this.__imgURL = value.trim();
	}


	get imgURL() {
		return this.__imgURL.trim();
	}



	addImagesToLibrary(images: FileList | File[]) {
		this.__imagesProcessor.process(images);
	}


}

import { Component } from '@angular/core';
import { UploadedImagesProcessorService } from '../services/uploaded-images-processor.service';
import { ImageURLProcessorService } from '../services/image-url-processor.service';
import { LibraryService } from '../services/library.service';


@Component({
	selector: 'image-chooser',
	templateUrl: './image-chooser.component.html'
})
export class ImageChooserComponent {

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






	addImagesToLibrary(images: FileList | File[]) {
		this.__imagesProcessor.process(images);
	}


}

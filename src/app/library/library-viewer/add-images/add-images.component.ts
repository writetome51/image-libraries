import { Component } from '@angular/core';
import { UploadedImagesProcessorService }
	from '../../../services/image/uploaded-images-processor.service';
import { ImageURLProcessorService } from '../../../services/image/image-url-processor.service';


@Component({
	selector: 'add-images',
	templateUrl: './add-images.component.html'
})
export class AddImagesComponent {

	gettingImagesInstructions = `The images can come from your own device or from somewhere
	else in the web.`;

	sizeLimitWarning = 'Each library is limited to 16 MB.';


	constructor(
		private __imagesProcessor: UploadedImagesProcessorService,
		private __imageURLProcessor: ImageURLProcessorService
	) {
	}


}

import { Component } from '@angular/core';
import { UploadedImagesProcessorService } from '../../services/uploaded-images-processor.service';


@Component({
	selector: 'choose-images-from-device',
	templateUrl: './choose-images-from-device.component.html'
})
export class ChooseImagesFromDeviceComponent {

	constructor(
		private __uploadedImagesProcessor: UploadedImagesProcessorService
	) {
	}


	addToLibrary(images: FileList | File[]) {
		this.__uploadedImagesProcessor.process(images);
	}


}

import { Component } from '@angular/core';
import { UploadedImagesProcessorService }
	from '../../../services/image/uploaded-images-processor.service';


@Component({
	selector: 'choose-images-from-device',
	templateUrl: './choose-images-from-device.component.html'
})
export class ChooseImagesFromDeviceComponent {

	constructor(
		private __uploadedImagesProcessor: UploadedImagesProcessorService
	) {
	}


	async addToLibrary(images: FileList | File[]): Promise<void> {
		await this.__uploadedImagesProcessor.process(images);
	}


}

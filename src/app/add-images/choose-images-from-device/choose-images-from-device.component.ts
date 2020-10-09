import { Component } from '@angular/core';
import { UploadedImagesProcessorService } from './uploaded-images-processor.service';


@Component({
	selector: 'choose-images-from-device',
	templateUrl: './choose-images-from-device.component.html',
	styles: [
		`div.input-group { margin: auto; }`
	]
})
export class ChooseImagesFromDeviceComponent {

	constructor(
		private __uploadedImagesProcessor: UploadedImagesProcessorService
	) {
	}


	async upload(images: FileList | File[]): Promise<void> {
		await this.__uploadedImagesProcessor.process(images);
	}


}

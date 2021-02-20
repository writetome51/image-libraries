import { Component } from '@angular/core';
import { UploadImagesProcessorService }
	from './upload-images-processor_service/upload-images-processor.service';


@Component({
	selector: 'upload-images-from-device',
	templateUrl: './upload-images-from-device.component.html',
	styles: [
		`div.input-group { margin: auto; }`
	]
})
export class UploadImagesFromDeviceComponent {

	constructor(private __uploadImagesProcessor: UploadImagesProcessorService) {
	}


	async upload(images: FileList | File[]): Promise<void> {
		await this.__uploadImagesProcessor.process(images);
	}

}

import { Component } from '@angular/core';
import { UploadImagesProcessorService } from './upload-images-processor.service';


@Component({
	selector: 'choose-images-from-device',
	templateUrl: './choose-images-from-device.component.html',
	styles: [
		`div.input-group { margin: auto; }`
	]
})
export class ChooseImagesFromDeviceComponent {

	constructor(private __uploadImagesProcessor: UploadImagesProcessorService) {
	}


	async upload(images: FileList | File[]): Promise<void> {
		await this.__uploadImagesProcessor.process(images);
	}

}

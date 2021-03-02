import { Component } from '@angular/core';
import { ProcessUploadImagesService }
	from './process-upload-images_service/process-upload-images.service';


@Component({
	selector: 'upload-images-from-device',
	templateUrl: './upload-images-from-device.component.html',
	styles: [
		`div.input-group { margin: auto; }`
	]
})
export class UploadImagesFromDeviceComponent {

	constructor(private __processUploadImages: ProcessUploadImagesService) {
	}


	async upload(images: FileList | File[]): Promise<void> {
		await this.__processUploadImages.go(images);
	}

}

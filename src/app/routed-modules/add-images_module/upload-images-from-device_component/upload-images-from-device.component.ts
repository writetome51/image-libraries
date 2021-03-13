import { Component } from '@angular/core';
import { ProcessUploadImagesService }
	from './process-upload-images_service/process-upload-images.service';


@Component({
	selector: 'upload-images-from-device',
	template: `
		<div>
			<p>Choose images from your own device:</p>

			<div class="input-group">
				<input type="file" multiple (change)="upload($event.target.files)"
					class="custom-file-input" id="inputGroupFile01" style="display: none;"
				/>
				<label class="custom-file-input btn btn-default" for="inputGroupFile01">
					Choose File(s)
				</label>
			</div>

		</div>
	`,
	styles: [`div.input-group {margin: auto;}`]
})
export class UploadImagesFromDeviceComponent {

	constructor(private __processUploadImages: ProcessUploadImagesService) {}


	async upload(images: FileList | File[]): Promise<void> {
		await this.__processUploadImages.go(images);
	}

}

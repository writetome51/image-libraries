import { DirectProcessor } from '../../interfaces/direct-processor';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';
import { ImagesToDisplayService } from './images-to-display.service';
import { AppImage } from '../../interfaces/app-image';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {

	constructor(
		private __imagesToDisplay: ImagesToDisplayService
	) {
	}


	async process(files: FileList | File[]): Promise<void> {

		for (let i = 0; i < files.length; ++i) {
			await this.__addTo__imagesToDisplay(files[i]);
		}
	}


	private async __addTo__imagesToDisplay(file) {

		let image: AppImage = {
			name: file.name,
			src: await getDataURL(file),
			description: '',
			tags: [],
			date: new Date(file.lastModified),
			location: ''
		};

		this.__imagesToDisplay.data.push(image);
	}


}

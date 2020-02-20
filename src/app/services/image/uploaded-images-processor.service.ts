import { DirectProcessor } from '../../interfaces/direct-processor';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';
import { AppImage } from '../../interfaces/app-image';
import { ImagesRestApiService } from './images-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {


	constructor(
		private __imagesRestApi: ImagesRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async process(files: FileList | File[]): Promise<void> {
		let images = [];

		for (let i = 0; i < files.length; ++i) {
			images[i] = await this.__getAppImage(files[i]);
		}
		this.__imagesRestApi.add(
			{sessionID: this.__localSessionID.get(), images}
		);
	}


	private async __getAppImage(file): Promise<AppImage> {
		return {
			name: file.name,
			src: await getDataURL(file),
			description: '',
			tags: [],
			date: new Date(file.lastModified),
			location: {latitude: undefined, longitude: undefined},
			rating: undefined
		};
	}


}

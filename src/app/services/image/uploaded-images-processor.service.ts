import { DirectProcessor } from '../../interfaces/direct-processor';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';
import { AppImage } from '../../interfaces/app-image';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { PerformDataOperationService as performDataOperation }
	from '../perform-data-operation.service';
import { SaveNewImagesProcessorService }
	from '../data-transport-processor/save-new-images-processor.service';
import { NewImagesData as newImages } from '../../data/runtime-state-data/new-images.data';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __addNewImagesProcessor: SaveNewImagesProcessorService
	) {
	}


	async process(files: FileList | File[]): Promise<void> {
		newImages.data = [];

		for (let i = 0; i < files.length; ++i) {
			newImages.data[i] = await this.__getAppImage(files[i]);
		}
		await performDataOperation.go(this.__addNewImagesProcessor);
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

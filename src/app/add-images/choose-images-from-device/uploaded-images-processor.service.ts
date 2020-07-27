import { AppImage } from '@interfaces/app-image';
import { DirectProcessor } from '@interfaces/direct-processor';
import { GetAppImageService as getAppImage } from '../get-app-image.service';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages } from '@runtime-state-data/static-classes/auto-resettable.data';
import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '@services/perform-data-process-requiring-waiting.service';
import { SaveNewImagesProcessorService }
	from '../save-new-images-processor/save-new-images-processor.service';


@Injectable({providedIn: 'root'})

export class UploadedImagesProcessorService implements DirectProcessor {


	constructor(private __saveNewImagesProcessor: SaveNewImagesProcessorService) {
	}


	async process(files: FileList | File[]): Promise<void> {

		for (let i = 0; i < files.length; ++i) {
			newImages.data[i] = await this.__getAppImage(files[i]);
		}
		await performDataProcessRequiringWaiting.go(this.__saveNewImagesProcessor, processingStatus);

		newImages.data = [];
	}


	private async __getAppImage(file): Promise<AppImage> {
		return getAppImage.go({
			name: file.name,
			src: await getDataURL(file),
			date: new Date(file.lastModified),
			location: file.location
		});
	}


}

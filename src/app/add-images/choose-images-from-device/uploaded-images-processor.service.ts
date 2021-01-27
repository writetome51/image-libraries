import { AppImage } from '@interfaces/app-image/app-image.interface';
import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { DirectProcessor } from '@interfaces/direct-processor.interface';
import { GetAppImageService as getAppImage } from '../get-app-image.service';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages } from '@runtime-state-data/static-classes/auto-resettable.data';
import { SaveNewImagesProcessorService }
	from './save-new-images-processor.service';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';


@Injectable({providedIn: 'root'})
export class UploadedImagesProcessorService implements DirectProcessor {


	constructor(private __saveNewImagesProcessor: SaveNewImagesProcessorService) {
	}


	async process(files: FileList | File[]): Promise<void> {

		for (let i = 0, length = files.length; i < length; ++i) {
			newImages.data[i] = await this.__getAppImage(files[i]);
		}
		await executeFunctionRequiringWaiting.go(
			() => this.__saveNewImagesProcessor.process(), executionStatus
		);
		newImages.data = [];
	}


	private async __getAppImage(file): Promise<AppImage> {

		return getAppImage.go({
			name: getFormattedName(file.name),
			src: await getDataURL(file),
			date: new Date(file.lastModified),
			location: file.location
		});


		function getFormattedName(name: string) {
			return name.split(' ').join('-');
		}
	}


}
